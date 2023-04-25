import React from 'react';
import { Link } from 'react-router-dom';
import './IshCard.css';
import { MdLocationPin } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
function IshCard({ cardData }) {
  return (
    <article className="ish-card">
      <Link to={`/ishlar/${cardData.id}`}>
        <h2>
          <strong>Kasbi</strong> {cardData.title}
        </h2>
        <p className="ish-hudud">
          <MdLocationPin className="ish-location" /> {cardData.hudud}
        </p>
        <p className="ish-hudud">
          <GiMoneyStack className="ish-location" /> $
          <strong>{cardData.narxi}</strong>
        </p>
      </Link>
    </article>
  );
}

export default IshCard;
