import React from 'react';
import SignalIcon from '../../images/Signal_Icon';

export default [{
  name: 'AlarmE',
  render: (
    <div>
      <div className='portfolio-item__titleFYP'>
        AlarmE
        <i className="fas fa-tag bounce-xy" data-fa-transform="rotate-90"></i>
        <SignalIcon/>
      </div>
      <div className='portfolio-item__desc'>
        Invented a portable alarm that can instantly produce a loud sound when the alarm is taken away from
        a person who has a smartphone.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-cuttlefish"></i>
        <i className="fab fa-android"></i>
      </div>
    </div>
  ),
  content : '',
  links:
      [{
        link: (<span></span>)
      }]
}, {
  name: '3-Wheel Robot',
  render: (
    <div>
      <div className='portfolio-item__title'>
        3-Wheel Robot
        <i className="fas fa-truck-monster"></i>
      </div>
      <div className='portfolio-item__desc'>
         Team up with 2 engineering students to assemble and programme a 3-Wheel Robot that can carry a load,
         search the route and deposit the load onto a specific location.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-cuttlefish"></i>
      </div>
    </div>
  ),
  content : '',
  links:
      [{
        link: (<p></p>)
      }]
}, {
  name: 'Weather Forecast',
  render: (
    <div>
      <div className='portfolio-item__title'>
        Weather Forecast
        <i className="fas fa-cloud-sun"></i>
      </div>
      <div className='portfolio-item__desc'>
        Worked actively with 3 enginnering students to create a webpage that can
        provide a range of weather forecast at the current location or any locations.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-js"></i>
      </div>
    </div>
  ),
  content : '',
  links:
      [{
        link: (
          <a href="https://koksoon7417.github.io/weatherForecast/">Web App</a>
        )
      },
      {
        link: (
          <a href="https://github.com/koksoon7417/weatherForecast">Codes</a>
        )
      }]
}, {
  name: 'Fingerprint',
  render: (
    <div>
      <div className='portfolio-item__title'>
        Fingerprint
        <i className="fas fa-fingerprint"></i>
      </div>
      <div className='portfolio-item__desc'>
        Collaborated with a R&D team to design, program and debug a fingerprint project
        by using FreeRTOS and knowledge of computer peripheral interfaces (e.g. SPI, UART).
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-cuttlefish"></i>
      </div>
    </div>
  ),
  content : '',
  links:
      [{
        link: (<p></p>)
      }]
}, {
  name: 'Challenges',
  render: (
    <div>
      <div className='portfolio-item__title'>
        'Challenges'
        <i className="fas fa-fist-raised"></i>
      </div>
      <div className='portfolio-item__desc'>
        Partnered with the University of Malaya Medical Centre, doctors and the UMCH team to design a
        'challenges' project that allows a user to compete with other users.
      </div>
      <div className='portfolio-item__icon'>
        <i className="fab fa-angular"></i>
        <i className="fab fa-node-js"></i>
        <i className="fab fa-js"></i>
      </div>
    </div>
  ),
  content : '',
  links:
      [{
        link: (<span></span>)
      }]
}]
