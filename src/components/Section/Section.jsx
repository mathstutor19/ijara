import React from 'react';
import './Section.css';
function Section(props) {
  return <section className="section">{props.children}</section>;
}

export default Section;
