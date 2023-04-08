import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import './Uylar.css';
import UyCard from '../../components/UyCard/UyCard';
import cardsData from '../../Datas/uylar';
function Uylar() {
  const [filteredData, setFilteredData] = useState(cardsData);
  const selectArea = new Set(cardsData.map((item) => item.hudud));

  function handleFilter(e) {
    const value = e.target.value.toLowerCase();
    const result = cardsData.filter((item) => item.jinsi === value);
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
  function handleFilterShartnoma(e) {
    const value = e.target.value.toLowerCase();
    const result = cardsData.filter(
      (item) => item.shartnoma === value
      // item.shartnoma.toLowerCase().includes(value)
    );
    setFilteredData(result);
    if (value === 'hammasi') {
      setFilteredData(cardsData);
    }
  }
  function handleFilterUyTuri(e) {
    const value = e.target.value.toLowerCase();
    const result = cardsData.filter((item) =>
      item.turi.toLowerCase().includes(value)
    );
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
            Jinsi
            <select onChange={handleFilter}>
              <option value="hammasi">hammasi</option>
              <option value="erkak">erkak</option>
              <option value="ayol">ayol</option>
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
          <label>
            Shartnoma Turi
            <select onChange={handleFilterShartnoma}>
              <option value="hammasi">hammasi</option>
              <option value="kerak">Kerak</option>
              <option value="kerakmas">Kerakmas</option>
            </select>
          </label>
          <label>
            Uy Turi
            <select onChange={handleFilterUyTuri}>
              <option value="hammasi">hammasi</option>
              <option value="hovli">Hovli</option>
              <option value="dom">Dom</option>
            </select>
          </label>
          <div className="uy-card-wrapper">
            {filteredData.map((card) => (
              <UyCard key={card.id} cardData={card} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Uylar;
