import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';
import './KutubxonaCard.css';

function KutubxonaCard({ cardData }) {
  return (
    <article className="kutubxona-card">
      <Link to={`/kutubxonalar/${cardData.id}`}>
        <img
          className="kutubxona-card-image"
          src={cardData.image}
          alt="image"
        />
        <div className="kutubxona-card-desc-wrapper">
          <h2> {cardData.title}</h2>
          <p className="kutubxona-icons-wrapper">
            <MdLocationPin className="kutubxona-icons" /> {cardData.hudud}
          </p>
          <p className="kutubxona-icons-wrapper">
            <GiMoneyStack className="kutubxona-icons" /> {cardData.narxi}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default KutubxonaCard;
