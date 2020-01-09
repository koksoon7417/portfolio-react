import React, { Component } from 'react';
import portfolioItems from './portfolio-items';

import './Portfolio.scss';

const PortfolioItem = (props) => {
  if (props.render) return props.render;
};

class Portfolio extends Component  {
  render() {
    return (
      <div className="portfolio-page">
        <div className="content-grid">
          <h1>Portfolio</h1>
          <div className="portfolio-wrapper">
              {portfolioItems.map((item, i) => (
                <PortfolioItem render={item.render} key={i}/>
              ))}
          </div>
        </div>
      </div>
    );
  };
}

export default Portfolio;
