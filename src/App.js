import React from 'react'
import './App.css';

import Footer from './components/footer/Footer';
import Homepage from './components/homepage/Homepage';

import Navbar from './components/navbar/Navbar';
import { Switch, Route } from "react-router-dom";
import About from './components/about/About';
import Rates from './components/rates/Rates';
import Accomodations from './components/accomodations/Accomodations';
import GetThere from './components/getThere/GetThere';
import LuxHouse from './components/luxHouse/LuxHouse.js';
import BookNow from './components/bookNow/BookNow.js';
import ActivitiesPage from './components/activities/ActivitiesPage';


function App() {

  return (


    <div className="App">

      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/accomodations" component={Accomodations} />
        <Route path="/rates" component={Rates} />
        <Route path="/about" component={About} />
        <Route path="/getthere" component={GetThere} />
        <Route path="/book" component={BookNow} />
        <Route path="/luxury-beach-house" component={LuxHouse} />
        <Route path="/activities" component={ActivitiesPage} />
        {/* <Homepage /> */}

      </Switch>
      <Footer />

    </div>

  );
}

export default App;
