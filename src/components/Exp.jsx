import React from 'react';
import Adidas from '../assets/Adidas-01.svg';
import Hm from '../assets/H-&-M-01.svg';

const Startup = ({ props }) => (
  <div className="e-p">
    <picture>
      <img className={props} src={props} alt="logo1" />
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
    <Startup props={Hm} />
    <Startup props={Adidas} />
  </div>
);

export default Exp;
