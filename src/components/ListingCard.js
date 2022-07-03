import React, { useState } from "react";

function ListingCard({ listing, onDeleteClick }) {
  const [isFave, setIsFave] = useState(false);
  function handleClick() {
    setIsFave(!isFave);
  }
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then((resp) => resp.json())
      .then(() => onDeleteClick(listing));
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFave ? (
          <button
            className="emoji-button favorite active"
            onClick={handleClick}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>
            ☆
          </button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>
          Delete🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
