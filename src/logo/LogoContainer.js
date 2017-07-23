import React, { Component } from 'react';
import './LogoContainer.css';

export default class LogoContainer extends Component {
  render() {
    return (
      <div className="logo-container">
        <a href="#" className="logo">
          <i className="zmdi zmdi-badge-check"></i> Todo!
        </a>
      </div>
    )
  }
}
