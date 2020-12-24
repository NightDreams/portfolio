import React from 'react';

const Startup = () => (
  <div className="e-p">
    <picture>
      <img src="" alt="logo1" />
    </picture>
    <div className="e-d">
      <small>Feb 2017 - Current</small>
      <h3>Front-end developer</h3>
      <p>
        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
        feugiat malesuada molestie.
      </p>
    </div>
  </div>
);

const Exp = () => (
  <div className="exp">
    <h2>Experiencias </h2>
    <Startup />
    <Startup />
  </div>
);

export default Exp;
