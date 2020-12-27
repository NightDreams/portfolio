import React from 'react';

import Game from '../assets/game1.webp';
import Run from '../assets/run2.jpg';
import Coock from '../assets/cook1.webp';

const Hobbie = ({ props, t }) => (
  <div className="h-e">
    <picture>
      <img src={props} alt="hobbiX" />
    </picture>
    <h3>{t}</h3>
    <p>Quisque feugiat malesuada molestie.</p>
  </div>
);

const Hobbies = () => (
  <>
    <div className="hobbies">
      <h2>Hobbies</h2>
      <div className="h-l">
        <Hobbie props={Game} t="Gaming" />
        <Hobbie props={Coock} t="Coocking" />
        <Hobbie props={Run} t="Runing" />
      </div>
    </div>
  </>
);

export default Hobbies;
