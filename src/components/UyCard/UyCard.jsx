import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import './UyCard.css';

function Card({ cardData }) {
  return (
    <article className="uy-card">
      <Link to={`/uylar/${cardData.id}`}>
        <img className="uy-card-image" src={cardData.image} alt="image" />
        <div className="uy-card-desc-wrapper">
          <h2 className='uy-card-title' > uy holati {cardData.title}</h2>
          <p className="uy-icons-wrapper">
            <MdLocationPin className="uy-icons" /> {cardData.hudud}
          </p>
          <p className="uy-icons-wrapper">
            <GiMoneyStack className="uy-icons" /> $
            <strong>{cardData.narxi}</strong>
          </p>
          <p className='uy-card-jinsi' >
            {cardData.jinsi} uchun {cardData.xonasi} xona
          </p>
        </div>
      </Link>
    </article>
  );
}

export default Card;
