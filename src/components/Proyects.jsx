import React from 'react';

import Galery from '../assets/galery.jpg';
import CockApp from '../assets/cookapp.jpg';
import Checkout from '../assets/chek2.jpg';

const pDes = {
  Recipe:
    'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
  Gallery:
    'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with instagram profile page. The design is from devchallenge.io',
  Check:
    'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
};

const Proyect = ({ props, t, d }) => (
  <div className="cards">
    <picture>
      <img src={props} alt="img-proyect" />
    </picture>
    <span>
      <small>@html</small>
      <small>@css</small>
      <small>@responsive</small>
    </span>
    <h2>{t}</h2>
    <p>{d}</p>
    <div className="c-b">
      <p className="fill">2</p>
      <p className="outline">2</p>
    </div>
  </div>
);

const Proyects = () => (
  <div className="proyect">
    <Proyect props={CockApp} t="Recipe Blog" d={pDes.Recipe} />
    <Proyect props={Galery} t="My Gallery" d={pDes.Gallery} />
    <Proyect props={Checkout} t="Checkout" d={pDes.Check} />
  </div>
);

export default Proyects;
