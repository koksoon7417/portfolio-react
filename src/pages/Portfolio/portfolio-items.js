import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignalIcon from '../../images/Signal_Icon';

export default [{
  name: 'FinalYearProject',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__titleFYP'>
        AlarmE
        <img className="my-AlarmE bounce-xy" src={ require('../../images/AlarmE.png') } alt="my-AlarmE"/>
        <SignalIcon/>
      </div>
      <div className='portfolio-item__desc'>
        Invented a portable alarm that can instantly produce a loud sound when the alarm is taken away from
        a person who has a smartphone.
      </div>

      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'cuttlefish']} />
        <FontAwesomeIcon icon={['fab', 'android']} />
      </div>
      <div className='portfolio-item__links' style={{color : '#4f90cd'}}>
        No Link
      </div>
    </div>
  )
}, {
  name: 'Three-WheelRobot',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        3-Wheel Robot
      </div>
      <div className='portfolio-item__desc'>
         Team up with 2 engineering students to assemble and programme a 3-Wheel Robot that can carry a load,
         search the route and deposit the load onto a specific location.
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'cuttlefish']} />
      </div>
      <div className='portfolio-item__links' style={{color : '#4f90cd'}}>
        No Link
      </div>
    </div>
  )
}, {
  name: 'weather-forecast',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Weather Forecast
        <img className="partly-cloudy-day" src={ require('../../images/partly-cloudy-day.png') } alt="partly-cloudy-day"/>
      </div>
      <div className='portfolio-item__desc'>
        Team up with another 3 enginnering students to create a Weather Forecast Webpage that can
        provide a range of weather forecast at the current location or any locations.
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'js']} />
      </div>
      <div className='portfolio-item__links'>
        <a href="https://koksoon7417.github.io/weatherForecast/">Webpage</a>
        <a href="https://github.com/koksoon7417/weatherForecast">Codes</a>
      </div>
    </div>
  )
}, {
  name: 'RnD',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        Fingerprint
        <img className="fingerprint" src={ require('../../images/fingerprint.png') } alt="fingerprint"/>
      </div>
      <div className='portfolio-item__desc'>
        Collaborated with a R&D team to design, program and debug a fingerprint project
        by using FreeRTOS and knowledge of computer peripheral interfaces (e.g. SPI, UART).
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'cuttlefish']} />
      </div>
      <div className='portfolio-item__links' style={{color : '#4f90cd'}}>
        No Link
      </div>
    </div>
  )
}, {
  name: 'WebDeveloper',
  render: (
    <div className='portfolio-item'>
      <div className='portfolio-item__title'>
        'Challenges'
      </div>
      <div className='portfolio-item__desc'>
        Partnered with the University of Malaya Medical Centre, doctors and the UMCH team to design a
        'challenges' project that allows a user to compete with other users.
      </div>
      <div className='portfolio-item__icon'>
        <FontAwesomeIcon icon={['fab', 'angular']} />
        <FontAwesomeIcon icon={['fab', 'node-js']} />
        <FontAwesomeIcon icon={['fab', 'js']} />
      </div>
      <div className='portfolio-item__links' style={{color : '#4f90cd'}}>
        No Link
      </div>
    </div>
  )
}]
