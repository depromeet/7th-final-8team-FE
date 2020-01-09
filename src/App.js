import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}/>
      <Route path="/datails" component={Details}/>
    </BrowserRouter>
  );
}

export default App;
