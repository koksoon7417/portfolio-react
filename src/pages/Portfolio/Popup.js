import React from 'react';
import './popup.scss';

class Popup extends React.Component {
  render() {
    return (
      <div className='popup-container'>
        <p onClick={this.props.clickButton}>More</p>
        {this.props.show && (
        <div className="popup">
         	<label onClick={this.props.onHide} className="transparent-label"></label>
          <div className="popup-inner">
            <button onClick={this.props.onHide} className="popup-close-btn">&times;</button>
            <div className="popup-title">
      				<h6>{this.props.item.name}</h6>
      			</div>
            <div className="popup-content">
            {this.props.item.content}
      			</div>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default Popup;
