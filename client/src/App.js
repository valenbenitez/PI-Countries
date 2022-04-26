import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import initPage from './components/LandingPage/initialPage';
import Home from './components/Home/home';
import CountryDetail from './components/CountriesDetail';
import NavBar from './components/NavBar/Navbar';
import Form from './components/Form';
import ErrorComp from './components/ErrorComp/ErrorComp';

function App() {
  return (
    <React.Fragment>
      <switch>
        {/* <Route path={'*'} component={ErrorComp} /> */}
        <Route exact path={'/'} component={initPage} />

        <Route exact path={'/countries'} component={NavBar}></Route>

        <Route exact path={'/countries'} component={Home} />

        <Route exact path={'/countries/:id'} component={CountryDetail} />

        <Route exact path={'/create'} component={Form} />

      </switch>
    </React.Fragment>
  );
}

export default App;
