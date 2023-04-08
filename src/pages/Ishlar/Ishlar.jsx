import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Ishlar.css';
import cardsData from '../../Datas/ishlar';
import IshCard from '../../components/IshCard/IshCard';
function Ishlar() {
  const [filteredData, setFilteredData] = useState(cardsData);
  //   const selectArea = new Set(cardsData.map((item) => item.hudud));

  function handleFilter(e) {
    const value = e.target.value.toLowerCase();
    const result = cardsData.filter((item) => item.tajriba >= value);
    setFilteredData(result);
    if (value === 'hammasi') {
      setFilteredData(cardsData);
    }
  }
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
      <Section>
        <Container>
          <label className="">
            Tajriba
            <input type="range" max={10} min={0} onChange={handleFilter} />
          </label>
          <label>
            Hududi
            <select onChange={handleFilterHudud}>
              {/* {selectArea.map((item) => (
                <option value={item.hudud}>{item.hudud}</option>
              ))} */}
              <option value="hammasi">hammasi</option>
              <option value="tashkent">Tashkent</option>
              <option value="andijon">Andijon</option>
              <option value="fargona">Fargona</option>
              <option value="namangan">Namangan</option>
            </select>
          </label>

          <div className="uy-card-wrapper">
            {filteredData.map((card) => (
              <IshCard key={card.id} cardData={card} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Ishlar;
