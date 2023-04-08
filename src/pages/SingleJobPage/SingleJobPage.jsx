import React from 'react';
import { useParams } from 'react-router';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import cardsData from '../../Datas/ishlar';
function SingleJobPage() {
  let { id } = useParams();
  let singleHome = cardsData.filter((item) => item.id == id);
  return (
    <Section>
      <Container>
        <article className="single-home-card">
          <h2> Ish lavozimi {singleHome[0].title}</h2>
          <p> joylashgan hududi {singleHome[0].hudud}</p>
          <p>
            narxi $ <strong>{singleHome[0].narxi}</strong>
          </p>
          <p>Tajribasi {singleHome[0].tajriba} year</p>
          <p>Jinsi {singleHome[0].jinsi}</p>
          <p> Oyligi ${singleHome[0].narxi}</p>
          <p>Malumot{singleHome[0].description}</p>
        </article>
      </Container>
    </Section>
  );
}

export default SingleJobPage;
