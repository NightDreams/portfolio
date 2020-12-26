import React from 'react';
import Block from '../assets/block.webp';

const Blog = () => (
  <div className="blog">
    <div className="post">
      <div className="b-d">
        <span>Blog</span>
        <h2>How to organize your CSS</h2>
      </div>
      <picture className="b-i">
        <img src={Block} alt="device" />
      </picture>
    </div>

    <p>
      In this article I tell the story about Proin eu justo sit amet lacus
      bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
      <br />
      <br />
      Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
      feugiat malesuada molestie.
    </p>
    <small>dev.to</small>
  </div>
);

export default Blog;
