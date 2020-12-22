import React from 'react';
import Skill from './Skills';
import dataSkills from './dataSkills';
import Hobbies from './Hobbies';
import Biography from './Biography';

const Layout = () => (
  <div className="layout">
    <Biography />
    <div className="b1">
      <Skill data={dataSkills.item} />
      <Hobbies />
    </div>
    <div className="b2">
      <div className="blog">3</div>
      <div className="exp">5</div>
    </div>
    <div className="stats" />
    <div className="proyects" />
    <div className="buttons" />
  </div>
);

export default Layout;
