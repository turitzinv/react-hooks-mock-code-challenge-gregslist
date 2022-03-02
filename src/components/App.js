import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("");

  function handleDeleteCard(deletedCard) {
    const updatedCards = cards.filter((card) => card.id !== deletedCard.id);
    setCards(updatedCards);
  }

  function handleSearchFilter(searchedCard) {
    setSearch(searchedCard);
  }

  function filteredCards() {
    if (search.length > 0) {
      return cards.filter((card) => card.description.includes(search));
    } else {
      return cards;
    }
  }

  // function handleSearchFilter(filteredCard) {
  //   const searchedCard = cards.filter((card) => card === filteredCard)
  //   setCards(searchedCard)
  // }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((cards) => setCards(cards));
  }, []);

  return (
    <div className="app">
      <Header handleSearchFilter={handleSearchFilter} />
      <ListingsContainer
        cards={filteredCards()}
        handleDeleteCard={handleDeleteCard}
      />
    </div>
  );
}

export default App;
