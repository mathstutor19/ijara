import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Barklar.css';
import cardsData from '../../Datas/barklar';
import BarkCard from '../../components/BarkCard/BarkCard';
function Barklar() {
  const [filteredData, setFilteredData] = useState(cardsData);
  //   const selectArea = new Set(cardsData.map((item) => item.hudud));

  function handleFilter(e) {
    const value = e.target.value.toLowerCase();
    const result = cardsData.filter((item) => item.turi === value);
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
            Turi
            <select onChange={handleFilter}>
              <option value="hammasi">hammasi</option>
              <option value="cafe">cafe</option>
              <option value="bog">bog</option>
              <option value="raqs">raqs</option>
            </select>
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
              <BarkCard key={card.id} cardData={card} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Barklar;
