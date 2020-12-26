import React from 'react';
import { MdEmail, MdPhone } from 'react-icons/md';
import Bio1 from '../assets/people1.webp';

const Biography = () => (
  <div className="Biography">
    <picture className="Bio">
      <img src={Bio1} alt="personal" />
    </picture>
    <div className="b-l">
      <div className="b__data">
        <div className="job">
          <h2> Billy Pearson</h2>
          <h3>Front-end developer</h3>
        </div>
        <div className="contact">
          <div className="group">
            <MdEmail />
            <p>billy@example.com</p>
          </div>
          <div className="group">
            <MdPhone />
            <p>(+603) 546 624 342</p>
          </div>
        </div>
      </div>
      <p>
        Self-motivated developer, who is willing to learn and create outstanding
        UI applications.
        <br />
        <br />
        Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
        feugiat malesuada molestie.
      </p>
    </div>
  </div>
);

export default Biography;
