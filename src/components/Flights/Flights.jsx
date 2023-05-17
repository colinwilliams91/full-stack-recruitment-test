import React, { useState, useEffect } from 'react';

import Card from '../Card/Card';

import STYLES from './Flights.scss';

import { fetchItineraries } from '../../utilities';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Flights = () => {
  const [itineraries, setItineraries] = useState([]);
  const [legs, setLegs] = useState([]);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    (() => {
      fetch('/flights.json')
        .then(response => response.json())
        .then(data => {
          console.log('DATA:', data.legs);
          setItineraries(data.itineraries);
          setLegs(data.legs);
          data.itineraries.forEach((el, i) => {
            console.log('ME', el.legs[0]);
            setTrips(prevTrips => {
              return [...prevTrips, el.legs[0], el.legs[1] ]
            });
          });
        })
        .catch(error => console.error("error Fetch flights.json", error));
    })();
  }, []) // <-- empty dependencies array for componentMount life-cycle event

  console.log('trips:', trips);
  console.log('itineraries', itineraries);
  console.log('legs', legs);

  return (
    <>
      {trips&&
        legs.map((trip, i) => {
          return <Card key={i + trip.id} trip={trip} leg1={trips[i]} leg2={trips[i + 1]} />
        })
      }
    </>
  )
};

export default Flights;
