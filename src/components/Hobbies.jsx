import React from 'react';

const Hobbie = () => (
  <div className="h-e">
    <picture>
      <img src="" alt="hobbiX" />
    </picture>
    <h3>Gaming</h3>
    <p>Quisque feugiat malesuada molestie.</p>
  </div>
);

const Hobbies = () => (
  <>
    <div className="hobbies">
      <h2>Hobbies</h2>
      <div className="h-l">
        <Hobbie />
        <Hobbie />
        <Hobbie />
      </div>
    </div>
  </>
);

export default Hobbies;
