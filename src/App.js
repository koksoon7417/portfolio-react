import React from 'react';
import Nav from './components/Nav';
import MyPage from './pages/MyPage/MyPage';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab);

function App() {
  return (
    <div className="App">
      <Nav/>
      <MyPage/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
