import React from 'react';

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
          <a href="https://github.com/koksoon7417"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/kok-soon-tan/"><i className="fab fa-linkedin"></i></a>
        </div>
      </main>
    </div>
  );
}

export default MyPage;
