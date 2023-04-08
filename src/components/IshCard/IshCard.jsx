import React from 'react';
import { Link } from 'react-router-dom';
import './IshCard.css';
function IshCard({ cardData }) {
  return (
    <article className="ish-card">
      <Link to={`/ishlar/${cardData.id}`}>
        <h2> Ish lavozimi {cardData.title}</h2>
        <p> Joylashgan hududi {cardData.hudud}</p>
        <p>
          Oylik maoshi $ <strong>{cardData.narxi}</strong>
        </p>
      </Link>
    </article>
  );
}

export default IshCard;
