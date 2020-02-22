import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details/Details';
import MyPage from './pages/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/details" component={Details}/> */}
        <Route exact path="/details/:locationId" component={Details}/>
        <Route path="/mypage" component={MyPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
