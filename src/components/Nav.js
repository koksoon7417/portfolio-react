import React, { Component } from 'react';

import './Nav.scss';

const isSmoothScrollSupported = ((document || {}).documentElement || {}).style
  ? 'scrollBehavior' in document.documentElement.style
  : false;

class Nav extends Component  {
  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);

    if (nextPage) {
      if (isSmoothScrollSupported) {
        nextPage.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        nextPage.scrollIntoView();
      }
    }
  }

  render() {
    return (
      <nav className="Nav">
        <img className="my-icon bounce-xy" src={ require('../images/logo192.png') } alt="my-icon"
             onClick={(e) => this.scrollToPage('.MyPage')}/>
        <div className="menu">
          <div
            className="menu__item active"
            onClick={(e) => this.scrollToPage('.About')}
          >
            About
          </div>
          <div
            className="menu__item"
            onClick={(e) => this.scrollToPage('.portfolio-page')}
          >
            Portfolio
          </div>
        </div>
      </nav>
    );
  };
}

export default Nav;
