import React from 'react';
import Skill from './Skills';
import dataSkills from './dataSkills';

const Layout = () => (
  <div className="layout">
    <div className="b1">
      <div className="skills">
        <h2>front end</h2>
        <Skill data={dataSkills.item} />
      </div>
      <div className="hobbies">2</div>
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
