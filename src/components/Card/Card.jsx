import React, { useState, useEffect } from "react";

import STYLES from './Card.scss';

import moment from "moment";

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Card = ({ trip, leg1, leg2, legs, itinerary }) => {
  const [leg1Info, setLeg1Info] = useState({});
  const [leg2Info, setLeg2Info] = useState({});

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

  // console.log('test:', leg1, leg2);
  // console.log('LEGS:', legs);
  console.log('trip:', trip);
  // console.log('inside CARD', leg1Info, leg2Info)
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
            <div>
              {
                moment(leg1Info.departure_time).format('HH:mm')
              }
            </div>
            <div>
              {leg1Info.departure_airport}
            </div>
          </div>
          <div id="leg-one-end-box">
            <div>
              {
                moment(leg1Info.arrival_time).format('HH:mm')
              }
            </div>
            <div>
              {leg1Info.arrival_airport}
            </div>
          </div>
          <div id="total-trip-box">
            <div>total trip</div>
            <div>direct/n Stop</div>
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
          <div>
            {
              moment(leg2Info.departure_time).format('HH:mm')
            }
          </div>
          <div>
            {leg2Info.departure_airport}
          </div>
        </div>
        <div id="leg-one-end-box">
          <div>
            {
              moment(leg2Info.arrival_time).format('HH:mm')
            }
          </div>
          <div>
            {leg2Info.arrival_airport}
          </div>
        </div>
        <div id="total-trip-box">
          <div>total trip</div>
          <div>direct/n Stop</div>
        </div>
      </div>
      <div className={getClassName('Parent__bottom-row')}>
        <div>Price
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
