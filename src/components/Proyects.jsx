import React from 'react';

const Proyect = () => (
  <div className="cards">
    <picture>
      <img src="" alt="img-proyect" />
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
    <Proyect />
    <Proyect />
    <Proyect />
  </div>
);

export default Proyects;
