import React from 'react';
// import BpkText from '@skyscanner/backpack-web/bpk-component-text';

import Header from '../Header';
import Flights from '../Flights/Flights';

import STYLES from './App.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      {/* <BpkText tagName="p">Over to you...</BpkText> */}
      {/* TODO: Add a component to display results here */}
      <Flights />
    </main>
  </div>
);

export default App;
