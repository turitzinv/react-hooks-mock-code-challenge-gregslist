import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ cards, handleDeleteCard }) {
  // const [cards, setCards] = useState([])

  // function handleDeleteCard(deletedQuestion) {
  //   const updatedCards = cards.filter((card) => card.id !== deletedQuestion.id);
  //   setCards(updatedCards);
  // };

  // useEffect(()=> {
  //   fetch("http://localhost:6001/listings")
  //     .then(resp => resp.json())
  //     .then(cards => setCards(cards))
  // },[])

  const allCards = cards.map((card) => (
    <ListingCard
      key={card.id}
      description={card.description}
      image={card.image}
      location={card.location}
      onDeleteCard={handleDeleteCard}
      card={card}
    />
  ));

  return (
    <main>
      <ul className="cards">{allCards}</ul>
    </main>
  );
}

export default ListingsContainer;

//import ListingCard (DONE)
//initial GET occurs here using useEffect (DONE)
//useState since the cards will be updated (DONE)
//map through state of cards (DONE)
//--ListingCard will have props and placed in line 8 (DONE)
