import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Uylar.css';
import UyCard from '../../components/UyCard/UyCard';
import cardsData from '../../Datas/uylar';
import { useEffect } from 'react';
function Uylar() {
  const [filteredData, setFilteredData] = useState(cardsData);
  const [hudud, setHudud] = useState('hammasi');
  const [shartnoma, setShartnoma] = useState('hammasi');
  const [uyTuri, setUyTuri] = useState('hammasi');
  const [jinsi, setJinsi] = useState('hammasi');

  useEffect(() => {
    let result = cardsData;
    if (jinsi !== 'hammasi') {
      result = result.filter((item) => item.jinsi === jinsi);
    }
    if (hudud !== 'hammasi') {
      result = result.filter((item) => item.hudud === hudud);
    }
    if (shartnoma !== 'hammasi') {
      result = result.filter((item) => item.shartnoma === shartnoma);
    }
    if (uyTuri !== 'hammasi') {
      result = result.filter((item) => item.turi === uyTuri);
    }

    setFilteredData(result);
  }, [hudud, shartnoma, uyTuri, jinsi]);

  function handleFilterJinsi(e) {
    const value = e.target.value.toLowerCase();
    setJinsi(value);
  }
  function handleFilterHudud(e) {
    const value = e.target.value.toLowerCase();
    setHudud(value);
  }
  function handleFilterShartnoma(e) {
    const value = e.target.value.toLowerCase();
    setShartnoma(value);
  }
  function handleFilterUyTuri(e) {
    const value = e.target.value.toLowerCase();
    setUyTuri(value);
  }
  return (
    <>
      <nav className="uylar-nav">
        <Container>
          <div className="uylar-label-wrapper">
            <label className="uylar-label">
              Jinsi
              <select className="uylar-select" onChange={handleFilterJinsi}>
                <option value="hammasi">hammasi</option>
                <option value="erkak">erkak</option>
                <option value="ayol">ayol</option>
              </select>
            </label>
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
            <label className="uylar-label">
              Shartnoma
              <select className="uylar-select" onChange={handleFilterShartnoma}>
                <option value="hammasi">hammasi</option>
                <option value="kerak">Kerak</option>
                <option value="kerakmas">Kerakmas</option>
              </select>
            </label>
            <label className="uylar-label">
              Uy Turi
              <select className="uylar-select" onChange={handleFilterUyTuri}>
                <option value="hammasi">hammasi</option>
                <option value="hovli">Hovli</option>
                <option value="dom">Dom</option>
              </select>
            </label>
          </div>
        </Container>
      </nav>
      <Section>
        <Container>
          <h2 className="heading-two text-center mb-5 -mt-5 capitalize">
            {hudud} {filteredData.length} uy topildi
          </h2>
          <div className="uy-card-wrapper">
            {filteredData.map((card) => (
              <UyCard key={card.id} cardData={card} />
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

export default Uylar;
