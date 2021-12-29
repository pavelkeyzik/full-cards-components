import React from 'react';
import { ReactComponent as CarbonMenuIcon } from '../assets/icons/carbon-menu.svg';

export function Cards() {
  return (
    <div className="story-grid-no-background">
      <div className="card">
        <div className="card-header">
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
        <div className="card-image">
          <img src="https://picsum.photos/360/184" alt="Something random" />
        </div>
        <div className="card-footer">This is a basic card</div>
      </div>
      <div className="card">
        <div className="card-header">
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
        <div className="card-body">
          <p>Minim dolor in amet nulla laboris</p>
        </div>
        <div className="card-footer">3 September 2019</div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="https://picsum.photos/360/184" alt="Something random" />
        </div>
        <div className="card-header">
          <div className="media">
            <div className="avatar avatar-outline">
              <img src="https://picsum.photos/100" alt="Avatar" />
            </div>
            <div className="media-content">
              <h2 className="media-title">Wade Warren</h2>
              <span className="media-subtitle">Software Tester</span>
            </div>
            <i className="icon">
              <CarbonMenuIcon />
            </i>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="media">
            <div className="avatar">
              <img src="https://picsum.photos/100" alt="Avatar" />
            </div>
            <div className="media-content">
              <h2 className="media-title">Savannah Nguyen</h2>
              <span className="media-subtitle">Web Development</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <p>Minim dolor in amet nulla laboris</p>
        </div>
        <div className="card-image">
          <img src="https://picsum.photos/360/184" alt="Something random" />
        </div>
        <div className="card-footer">October 14</div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="media">
            <div className="avatar">
              <img src="https://picsum.photos/100" alt="Avatar" />
            </div>
            <div className="media-content">
              <h2 className="media-title">Devon Lane</h2>
              <span className="media-subtitle">Web Development</span>
            </div>
            <button className="btn btn-outline">Button</button>
          </div>
        </div>
        <div className="card-image">
          <img src="https://picsum.photos/360/184" alt="Something random" />
        </div>
        <div className="card-body">
          <p>Minim dolor in amet nulla laboris</p>
        </div>
        <div className="card-footer">23 April 2021</div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="media">
            <div className="avatar">
              <img src="https://picsum.photos/100" alt="Avatar" />
            </div>
            <div className="media-content">
              <h2 className="media-title">Annette Black</h2>
              <span className="media-subtitle">Web Development</span>
            </div>
            <i className="icon">
              <CarbonMenuIcon />
            </i>
          </div>
        </div>
        <div className="card-image">
          <img src="https://picsum.photos/360/184" alt="Something random" />
        </div>
        <div className="card-body">
          <p>Minim dolor in amet nulla laboris</p>
        </div>
        <div className="card-footer">January 07</div>
      </div>
    </div>
  );
}

export default {
  title: 'Example/Cards',
};
