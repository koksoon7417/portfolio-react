import React, { Component } from 'react';
import portfolioItems from './portfolio-items';
import Popup from './Popup';

import './Portfolio.scss';

const PortfolioItem = (props) => {
  if (props.render) return props.render;
};

const PortfolioItemLinks = (props) => {
  if (props.links) return props.links;
};

class Portfolio extends Component  {
  constructor(props) {
    super(props);
    this.state = { showModal: portfolioItems.length };
  }

  getModal = value => {
    this.setState({
      showModal: value
    });
  };

  hideModal = () => {
    this.setState({
      showModal: portfolioItems.length
    });
  };

  render() {
    return (
      <div className="portfolio-page">
        <div className="content-grid">
          <h1>Portfolio</h1>
          <div className="portfolio-wrapper">
              {portfolioItems.map((item, i) => (
                <div className='portfolio-item'>
                  <PortfolioItem render={item.render} key={i}/>
                    <div className='portfolio-item__links'>
                      {item.content && (
                        <Popup
                          clickButton={() => this.getModal(i)}
                          show={this.state.showModal === i}
                          onHide={() => this.hideModal()}
                          item={item}
                          key={i}
                        />
                      )}

                      {Object.keys(item.links).map((link, j) =>
                        <PortfolioItemLinks links={item.links[link].link} key={j}/>
                      )}
                    </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };
}

export default Portfolio;
