import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details/Details';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home}/>
      <Route path="/details" component={Details}/>
      <Route path="/mypage" component={MyPage}/>
    </BrowserRouter>
  );
}

export default App;
