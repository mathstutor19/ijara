import React from 'react';
import { Link } from 'react-router-dom';

import './KutubxonaCard.css';

function KutubxonaCard({ cardData }) {
  return (
    <article className="uy-card">
      <Link to={`/kutubxonalar/${cardData.id}`}>
        <img className="uy-card-image" src={cardData.image} alt="image" />
        <h2> Holati {cardData.title}</h2>
        <p> Joylashgan hududi {cardData.hudud}</p>
        <p>
          Xizmat turi $ <strong>{cardData.narxi}</strong>
        </p>
      </Link>
    </article>
  );
}

export default KutubxonaCard;
