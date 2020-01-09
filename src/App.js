import React from 'react';
import Nav from './components/Nav';
import MyPage from './pages/MyPage/MyPage';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';

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
