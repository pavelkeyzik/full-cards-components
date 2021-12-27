import React from 'react';
import { ReactComponent as CarbonMenuIcon } from '../assets/icons/carbon-menu.svg';

export function Media() {
  return (
    <div className="story-grid">
      <div className="story-grid-row">
        <div className="media">
          <div className="avatar">
            <img src="https://picsum.photos/100" alt="Avatar" />
          </div>
          <div className="media-content">
            <h2 className="media-title">Frank Esteban</h2>
            <span className="media-subtitle">Web Development</span>
          </div>
        </div>
      </div>
      <div className="story-grid-row">
        <div className="media">
          <div className="avatar">
            <img src="https://picsum.photos/100" alt="Avatar" />
          </div>
          <div className="media-content">
            <h2 className="media-title">Frank Esteban</h2>
            <span className="media-subtitle">Web Development</span>
          </div>
          <button className="btn btn-small btn-outline">Button</button>
        </div>
      </div>
      <div className="story-grid-row">
        <div className="media">
          <div className="avatar">
            <img src="https://picsum.photos/100" alt="Avatar" />
          </div>
          <div className="media-content">
            <h2 className="media-title">Frank Esteban</h2>
            <span className="media-subtitle">Web Development</span>
          </div>
          <i className="icon">
            <CarbonMenuIcon />
          </i>
        </div>
      </div>
    </div>
  );
}

export default {
  title: 'Example/Media',
};
