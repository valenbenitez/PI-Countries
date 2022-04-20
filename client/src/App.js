import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import initPage from './components/LandingPage/initialPage';
import Home from './components/Home/home';
import CountryDetail from './components/CountriesDetail';

function App() {
  return (
    <React.Fragment>

      <Route exact path={'/'} component={initPage}/>

      <Route exact path={'/countries'} component={Home}/>

      <Route exact path={'/countries/:id'} component={CountryDetail}/>

    </React.Fragment>
  );
}

export default App;
