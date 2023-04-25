import React, { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Ishlar.css';
import cardsData from '../../Datas/ishlar';
import IshCard from '../../components/IshCard/IshCard';
function Ishlar() {
  const [filteredData, setFilteredData] = useState(cardsData);
  const [hudud, setHudud] = useState('hammasi');
  const [kasbi, setKasbi] = useState('hammasi');
  const [tajriba, setTajriba] = useState('hammasi');
  const [jinsi, setJinsi] = useState('hammasi');
  const [pagination, setPagination] = useState(0);
  useEffect(() => {
    let result = cardsData;
    if (jinsi !== 'hammasi') {
      result = result.filter((item) => item.jinsi === jinsi);
    }
    if (hudud !== 'hammasi') {
      result = result.filter((item) => item.hudud === hudud);
    }
    // if (kasbi !== 'hammasi') {
    //   result = result.filter((item) => item.kasbi === kasbi);
    // }
    if (tajriba !== 'hammasi') {
      result = result.filter((item) => item.tajriba >= tajriba);
    }

    setFilteredData(result);
  }, [hudud, kasbi, tajriba, jinsi]);

  function handleFilterJinsi(e) {
    const value = e.target.value.toLowerCase();
    setJinsi(value);
  }
  function handleFilterHudud(e) {
    const value = e.target.value.toLowerCase();
    setHudud(value);
  }
  function handleFilterKasbi(e) {
    const value = e.target.value.toLowerCase();
    setKasbi(value);
  }
  function handleFilterTajriba(e) {
    const value = e.target.value.toLowerCase();
    setTajriba(value);
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
            {/* <label className="uylar-label">
              Kasbi
              <select className="uylar-select" onChange={handleFilterKasbi}>
                <option value="hammasi">hammasi</option>
                <option value="kerak">Kerak</option>
                <option value="kerakmas">Kerakmas</option>
              </select>
            </label> */}
            <label className="uylar-label">
              Tajriba
              <select className="uylar-select" onChange={handleFilterTajriba}>
                <option value="hammasi">hammasi</option>
                <option value="1">0-1</option>
                <option value="3">1-3</option>
                <option value="5">3-5</option>
                <option value="6">5+</option>
              </select>
            </label>
          </div>
        </Container>
      </nav>
      <Section>
        <Container>
          <h2 className="heading-two text-center mb-5 -mt-5 capitalize">
            {hudud} {filteredData.length} ish topildi
          </h2>
          <div className="uy-card-wrapper">
            {filteredData.map((card) => (
              <IshCard key={card.id} cardData={card} />
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

export default Ishlar;
