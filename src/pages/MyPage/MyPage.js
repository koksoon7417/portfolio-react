import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './MyPage.scss';

function MyPage() {
  return (
    <div className="MyPage">
      <main>
        <div className="intro-name">Hello, I'm Kok Soon!</div>
        <div className="tagline">
          Electrical and Computer Systems Engineer
        </div>
        <div className="social-icons animate-icons">
          <a href="https://github.com/koksoon7417"><FontAwesomeIcon icon={['fab', 'github']} /></a>
          <a href="https://www.linkedin.com/in/kok-soon-tan/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
        </div>
      </main>
    </div>
  );
}

export default MyPage;
