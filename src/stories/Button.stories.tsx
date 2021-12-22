import React from 'react';

export function Button() {
  return (
    <div className="story-grid">
      <div className="story-grid-row">
        <button className="btn">Default</button>
        <button className="btn btn-outline">Outline</button>
        <button className="btn btn-pill">Default</button>
        <button className="btn btn-pill btn-outline">Outline</button>
      </div>
      <div className="story-grid-row">
        <button className="btn btn-small">Small</button>
        <button className="btn btn-small btn-outline">Small</button>
        <button className="btn btn-small btn-pill">Small</button>
        <button className="btn btn-small btn-pill btn-outline">Small</button>
      </div>
      <div className="story-grid-row">
        <button className="btn btn-large">Large</button>
        <button className="btn btn-large btn-outline">Large</button>
        <button className="btn btn-large btn-pill">Large</button>
        <button className="btn btn-large btn-pill btn-outline">Large</button>
      </div>
    </div>
  );
}

export default {
  title: 'Example/Button',
};
