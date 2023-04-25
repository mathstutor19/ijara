import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import cardsData from '../../Datas/universitet';
import './SingleUniversitetPage.css';
function SingleUniversitetPage() {
  const [show, setShow] = useState(false);
  const [xonalar, setXonalar] = useState(1);
  const getId = (id) => {
    setShow(true);
    setXonalar(id);
  };
  let { id } = useParams();
  let singleUniversity = cardsData.filter((item) => item.id == id);
  return (
    <Section>
      <Container>
        <article className="single-home-card">
          <h2 className="heading-two text-center">Yotoqxona Tanlang</h2>
          {singleUniversity[0].yotoqxona.map((item) => (
            <div
              className="universitet-yotoqxona"
              onClick={() => getId(item.id)}
              key={item.id}
            >
              {item.id} Yotoqxona
            </div>
          ))}
          {show && (
            <div>
              {singleUniversity[0].yotoqxona
                .filter((item) => item.id == xonalar)
                .map((item) => item.xonalar)[0]
                .map((item) => (
                  <div
                    className={
                      item.band == 'band'
                        ? 'universitet-xona universitet-xona-band'
                        : 'universitet-xona universitet-xona-bandmas'
                    }
                    key={item.id}
                  >
                    {item.id} xona {item.band}
                  </div>
                ))}
            </div>
          )}
        </article>
      </Container>
    </Section>
  );
}

export default SingleUniversitetPage;
