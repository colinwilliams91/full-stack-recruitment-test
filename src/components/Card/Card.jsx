import React, { useState, useEffect } from "react";

import STYLES from './Card.scss';

import moment from "moment";

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Card = ({ trip, leg1, leg2, legs, itinerary }) => {

  const [leg1Info, setLeg1Info] = useState({});
  const [leg2Info, setLeg2Info] = useState({});
  const [leg1Time, setLeg1Time] = useState(0);
  const [leg2Time, setLeg2Time] = useState(0);

  useEffect(() => {

    if (leg1 && leg2) {
      setLeg1Info(() => {
        return legs.filter(leg => {
          console.log('iterator leg:', leg, 'target:', leg1);
          return leg.id === leg1
        })[0];
      });
      setLeg2Info(() => {
        return legs.filter(leg => {
          console.log('iterator leg:', leg, 'target:', leg2);
          return leg.id === leg2
        })[0];
      });
    }

  }, [leg1, leg2, legs]);

  useEffect(() => {

    const duration1 = moment.duration(leg1Info.duration_mins, 'minutes');
    const duration2 = moment.duration(leg2Info.duration_mins, 'minutes');
    const formattedDuration1 = `${Math.floor(duration1.asHours())}h ${duration1.minutes()}m`;
    const formattedDuration2 = `${Math.floor(duration2.asHours())}h ${duration2.minutes()}m`;
    setLeg1Time(formattedDuration1);
    setLeg2Time(formattedDuration2);

  }, [leg1Info, leg2Info]);

  return (
    <div className={getClassName('Parent')}>
      <div className={getClassName('Parent__top-row')}>
          <div className={getClassName('Logo')}>
            <img
              className={getClassName('Logo__airline-image')}
              alt="Airline"
              referrerPolicy="no-referrer"
              src={`https://logos.skyscnr.com/images/airlines/favicon/${trip.airline_id}.png`}
            />
          </div>
          <div id="leg-one-start-box">
            <div className={getClassName('Time')}>
              {
                moment(leg1Info.departure_time).format('HH:mm')
              }
            </div>
            <div className={getClassName('Airport')}>
              {leg1Info.departure_airport}
            </div>
          </div>
          <div id="leg-one-end-box">
            <div className={getClassName('Time')}>
              {
                moment(leg1Info.arrival_time).format('HH:mm')
              }
            </div>
            <div className={getClassName('Airport')}>
              {leg1Info.arrival_airport}
            </div>
          </div>
          <div id="total-trip-box" className={getClassName('Total')}>
            <div style={{ paddingTop: '1rem' }}>
              {leg1Time &&
                leg1Time
              }
              <div>
                {leg1Info.stops > 0
                  ? <div style={{ marginBottom: '2rem', color: 'magenta' }}>
                      {`${leg1Info.stops} Stop`}
                    </div>
                  : <div style={{ marginBottom: '2rem', color: 'rgb(0, 255, 242)' }}>
                      Direct
                    </div>
                }
              </div>
            </div>
          </div>
      </div>
      <div className={getClassName('Parent__middle-row')}>
        <div className={getClassName('Logo')}>
          <img
            className={getClassName('Logo__airline-image')}
            alt="Airline"
            referrerPolicy="no-referrer"
            src={`https://logos.skyscnr.com/images/airlines/favicon/${trip.airline_id}.png`}
          />
        </div>
        <div id="leg-one-start-box">
          <div className={getClassName('Time')}>
            {
              moment(leg2Info.departure_time).format('HH:mm')
            }
          </div>
          <div className={getClassName('Airport')}>
            {leg2Info.departure_airport}
          </div>
        </div>
        <div id="leg-one-end-box">
          <div className={getClassName('Time')}>
            {
              moment(leg2Info.arrival_time).format('HH:mm')
            }
          </div>
          <div className={getClassName('Airport')}>
            {leg2Info.arrival_airport}
          </div>
        </div>
        <div id="total-trip-box" className={getClassName('Total')}>
            <div style={{ paddingTop: '1rem' }}>
              {leg2Time &&
                leg2Time
              }
              <div>
                {leg2Info.stops > 0
                  ? <div style={{ marginBottom: '2rem', color: 'magenta' }}>
                      {`${leg2Info.stops} Stop`}
                    </div>
                  : <div style={{ marginBottom: '2rem', color: 'rgb(0, 255, 242)' }}>
                      Direct
                    </div>
                }
              </div>
            </div>
          </div>
      </div>
      <div className={getClassName('Parent__bottom-row')}>
        <div className={getClassName('Agent')}>
          <div id='price-box' style={{ height: "2.75rem" }}>
            <h2>
              {itinerary.price}
            </h2>
          </div>
          {itinerary &&
            <a
              href={`http://www.${itinerary.agent}`}
              style={{ color: "grey" }}>
                {itinerary.agent}
            </a>
          }
        </div>
        <div><button className={getClassName('Button')}>Select</button></div>
      </div>
    </div>
  )
};

export default Card;
