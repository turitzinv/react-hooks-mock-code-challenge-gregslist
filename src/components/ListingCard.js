import React, { useState } from "react";

function ListingCard({ description, image, location, card, onDeleteCard }) {
  const [favorite, setFavorite] = useState(false) //maybe false for no star (WORKED)

  function favoriteClick() {
   setFavorite(true)
  }

  function unfavoriteClick(){
    setFavorite(false)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${card.id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => onDeleteCard(card))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? ( //maybe changing true to the state (WORKED)
          <button onClick={unfavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;



//localhost listings have id, description, image, location


