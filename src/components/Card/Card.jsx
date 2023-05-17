import React, { useState, useEffect } from "react";

import STYLES from './Card.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const Card = ({ trip, leg1, leg2 }) => {
  console.log('trip:', trip);
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
            LEG 1 start
          </div>
          <div>
            dep airport
          </div>
        </div>
        <div id="leg-one-end-box">
          <div>
            LEG 1 end
          </div>
          <div>
            arr airport
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
            LEG 1 start
          </div>
          <div>
            dep airport
          </div>
        </div>
        <div id="leg-one-end-box">
          <div>
            LEG 1 end
          </div>
          <div>
            arr airport
          </div>
        </div>
        <div id="total-trip-box">
          <div>total trip</div>
          <div>direct/n Stop</div>
        </div>
      </div>
      <div className={getClassName('Parent__bottom-row')}>
        <div>Price<p>Website</p></div>
        <div><button className={getClassName('Button')}>Select</button></div>
      </div>
    </div>
  )
};

export default Card;
