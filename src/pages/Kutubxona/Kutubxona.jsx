import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Kutubxona.css';
import cardsData from '../../Datas/kutubxonalar';
import KutubxonaCard from '../../components/KutubxonaCard/KutubxonaCard';
function Kutubxona() {
  const [filteredData, setFilteredData] = useState(cardsData);
  //   const selectArea = new Set(cardsData.map((item) => item.hudud));

  function handleFilter(e) {
    const value = e.target.value.toLowerCase();
    const result = cardsData.filter((item) => item.narxi === value);
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
            Narxi
            <select onChange={handleFilter}>
              <option value="hammasi">hammasi</option>
              <option value="tekin">tekin</option>
              <option value="pullik">pullik</option>
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
              <KutubxonaCard key={card.id} cardData={card} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Kutubxona;
