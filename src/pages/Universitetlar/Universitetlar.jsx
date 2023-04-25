import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Universitetlar.css';
import cardsData from '../../Datas/universitet';
import UniversitetlarCard from '../../components/UniversitetlarCard/UniversitetlarCard';
function Universitetlar() {
  const [filteredData, setFilteredData] = useState(cardsData);

  function handleFilterHudud(e) {
    const value = e.target.value.toLowerCase();
    const result = cardsData.filter((item) => item.hudud === value);
    setFilteredData(result);
    if (value === 'hammasi') {
      setFilteredData(cardsData);
    }
  }

  return (
    <>
      <nav className="uylar-nav">
        <Container>
          <div className="uylar-label-wrapper">
            <label className="uylar-label">
              Hududi
              <select className="uylar-select" onChange={handleFilterHudud}>
                <option value="hammasi">hammasi</option>
                <option value="tashkent">Tashkent</option>
                <option value="andijon">Andijon</option>
                <option value="fargona">Fargona</option>
                <option value="namangan">Namangan</option>
              </select>
            </label>
          </div>
        </Container>
      </nav>
      <Section>
        <Container>
          <div className="uy-card-wrapper">
            {filteredData.map((card) => (
              <UniversitetlarCard key={card.id} cardData={card} />
            ))}
          </div>
          <div className="uy-pagination">
            <button className="uy-btn-nav left-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="left-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="uy-page-numbers">
              <button className="uy-btn-page">1</button>
              <button className="uy-btn-page">2</button>
              <button className="uy-btn-page uy-btn-selected">3</button>
              <button className="uy-btn-page">4</button>
              <button className="uy-btn-page">5</button>

              <span className="dots">...</span>
              <button className="uy-btn-page">23</button>
            </div>
            <button className="uy-btn-nav right-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="right-icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Universitetlar;
