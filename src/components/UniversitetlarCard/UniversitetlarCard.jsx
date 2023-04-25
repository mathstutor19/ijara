import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import './UniversitetlarCard.css';

function UniversitetlarCard({ cardData }) {
  return (
    <article className="universitet-card">
      <Link to={`/universitetlar/${cardData.id}`}>
        <img
          className="universitet-card-image"
          src={cardData.image}
          alt="image"
        />
        <div className="universitet-card-desc-wrapper">
          <h2>{cardData.title}</h2>
          <p className="universitet-icons-wrapper">
            <MdLocationPin className="universitet-icons" /> {cardData.hudud}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default UniversitetlarCard;
