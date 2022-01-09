import React from 'react';

export function Badges() {
  return (
    <div className="story-grid">
      <div className="story-grid-row">
        <button className="badge badge-pill badge-outline">BADGE</button>
        <button className="badge badge-outline">Badge</button>
      </div>
      <div className="story-grid-row">
        <button className="badge badge-pill">BADGE</button>
        <button className="badge">Badge</button>
      </div>
    </div>
  );
}

export default {
  title: 'Example/Badges',
};
