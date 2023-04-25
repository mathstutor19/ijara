import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Kutubxona.css';
import cardsData from '../../Datas/kutubxonalar';
import KutubxonaCard from '../../components/KutubxonaCard/KutubxonaCard';
function Kutubxona() {
  const [filteredData, setFilteredData] = useState(cardsData);
  const [hudud, setHudud] = useState('hammasi');
  const [narxi, setNarxi] = useState('hammasi');
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    let result = cardsData;
    if (narxi !== 'hammasi') {
      result = result.filter((item) => item.narxi === narxi);
    }
    if (hudud !== 'hammasi') {
      result = result.filter((item) => item.hudud === hudud);
    }

    setFilteredData(result);
  }, [hudud, narxi]);

  function handleFilterNarxi(e) {
    const value = e.target.value.toLowerCase();
    setNarxi(value);
  }
  function handleFilterHudud(e) {
    const value = e.target.value.toLowerCase();
    setHudud(value);
  }

  return (
    <>
      <nav className="uylar-nav">
        <Container>
          <div className="uylar-label-wrapper">
            <label className="uylar-label">
              Jinsi
              <select className="uylar-select" onChange={handleFilterNarxi}>
                <option value="hammasi">hammasi</option>
                <option value="tekin">tekin</option>
                <option value="pullik">pullik</option>
              </select>
            </label>
            <label className="uylar-label">
              Hududi
              <select className="uylar-select" onChange={handleFilterHudud}>
                <option value="hammasi">Hammasi</option>
                <option value="tashkent">Tashkent</option>
                <option value="andijon">Andijon</option>
                <option value="buxoro">Buxoro</option>
                <option value="samarqand">Samarqand</option>
                <option value="surxandaryo">Surxandaryo</option>
              </select>
            </label>
          </div>
        </Container>
      </nav>
      <Section>
        <Container>
          <h2 className="heading-two text-center mb-5 -mt-5 capitalize">
            {hudud} {filteredData.length} kutubxona topildi
          </h2>
          <div className="uy-card-wrapper">
            {filteredData.map((card) => (
              <KutubxonaCard key={card.id} cardData={card} />
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
              <button className="uy-btn-page uy-btn-selected">1</button>
              <button className="uy-btn-page">2</button>
              <button className="uy-btn-page ">3</button>
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

export default Kutubxona;
