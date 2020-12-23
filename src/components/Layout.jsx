import React from 'react';
import dataSkills from './dataSkills';
// CV
import Biography from './Biography';
// seccion main
import Skill from './Skills';
import Hobbies from './Hobbies';
import Blog from './Blog';
import Exp from './Exp';
// seccion inferior
import Stats from './Stats';
import Proyects from './Proyects';
import Buttons from './Buttons';

const Layout = () => (
  <div className="layout">
    <Biography />
    <div className="b1">
      <Skill data={dataSkills.item} />
      <Hobbies />
    </div>
    <div className="b2">
      <Blog />
      <Exp />
    </div>
    <Stats />
    <Proyects />
    <Buttons />
  </div>
);

export default Layout;
