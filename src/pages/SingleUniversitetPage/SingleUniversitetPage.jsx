import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import cardsData from '../../Datas/universitet';
import './SingleUniversitetPage.css';
function SingleUniversitetPage() {
  let { id } = useParams();
  let singleHome = cardsData.filter((item) => item.id == id);
  return (
    <Section>
      <Container>
        <article className="single-home-card">
          <img
            className="single-home-image"
            src={singleHome[0].image}
            alt="image"
          />
          <h2> uy holati {singleHome[0].title}</h2>
          <p> joylashgan hududi {singleHome[0].hudud}</p>
          <p>
            narxi $ <strong>{singleHome[0].narxi}</strong>
          </p>
          <p>{singleHome[0].turi}</p>
          <p>{singleHome[0].description}</p>
        </article>
      </Container>
    </Section>
  );
}

export default SingleUniversitetPage;
