import React from 'react';

import Galery from '../assets/galery.jpg';
import CockApp from '../assets/cookapp.jpg';
import Checkout from '../assets/chek2.jpg';

const Proyect = ({ props }) => (
  <div className="cards">
    <picture>
      <img src={props} alt="img-proyect" />
    </picture>
    <span>
      <small>@html</small>
      <small>@css</small>
      <small>@responsive</small>
    </span>
    <h2>proyect</h2>
    <p>
      In this project, I work with HTML and CSS to create a responsive page.
      This page is similiar with a page. The design is from devchallenge.io
    </p>
    <div className="c-b">
      <p className="fill">2</p>
      <p className="outline">2</p>
    </div>
  </div>
);

const Proyects = () => (
  <div className="proyect">
    <Proyect props={CockApp} />
    <Proyect props={Galery} />
    <Proyect props={Checkout} />
  </div>
);

export default Proyects;
