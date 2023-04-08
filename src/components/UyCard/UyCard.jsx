import React from 'react';
import { Link } from 'react-router-dom';

import './UyCard.css';

function Card({ cardData }) {
  return (
    <article className="uy-card">
      <Link to={`/uylar/${cardData.id}`}>
        <img className="uy-card-image" src={cardData.image} alt="image" />
        <h2> uy holati {cardData.title}</h2>
        <p> joylashgan hududi {cardData.hudud}</p>
        <p>
          narxi $ <strong>{cardData.narxi}</strong>
        </p>
        <p>
          {cardData.jinsi} uchun {cardData.xonasi} xona
        </p>
      </Link>
    </article>
  );
}

export default Card;
