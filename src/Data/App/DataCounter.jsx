import React from "react";
import Countdown from "react-countdown";
import { Row, Col } from "react-bootstrap";
import Timer from "react-timer-wrapper";
import Timecode from "react-timecode";

// Time Counting From 0

export const DataCount = () => {
  return (
    <Timer className="h3" active duration={6000000}>
      <Timecode className="text-break" />
    </Timer>
  );
};

// TimeMinutesCounter

export const TimeMinutesCounter = () => {
  return (
    <h2>
      <Countdown className="text-break" date={Date.now() + 1440000} />
    </h2>
  );
};
// Time Counting From 60 to 20

export const TimeCounting = () => {
  return (
    <h2>
      <Countdown className="text-break" date={Date.now() + 60000} />
    </h2>
  );
};

// Time Counting days Limit **********************

// Random component
const AfterCompletion = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterCompletion />;
  } else {
    // Render a countdown
    return (
      <span>
        {days} Days {hours} Hours:{minutes} Minutes:{seconds} Seconds
      </span>
    );
  }
};
export const CountDaysLimit = () => {
  return <Countdown date={Date.now() + 459200000} renderer={renderer} />;
};

// Time Counting days Limit **********************

//  Day Counter  *******************

// Time Counting days Limit **********************

// Random component
const AfterComplete = () => <span>You are good to go!</span>;

// Renderer callback with condition
const rendering = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <AfterComplete />;
  } else {
    // Render a countdown
    return (
      <span>
        <Row className="count-down">
          <Col lg={3} className="countdown">
            <div className="countdown bg-primary-gradient p-3 mb-1">
              <span className="days text-white">{days}</span>
              <span className="text-white">Days</span>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-success-gradient p-3 mb-1">
              <span className="hours text-white">{hours}</span>
              <span className="text-white">Hours</span>
            </div>
          </Col>

          <Col lg={3} className="countdown">
            <div className="countdown bg-warning-gradient p-3 mb-1">
              <span className="minutes text-white">{minutes}</span>
              <span className="text-white">Minutes</span>
            </div>
          </Col>
          <Col lg={3} className="countdown">
            <div className="countdown bg-info-gradient p-3 mb-1">
              <span className="seconds text-white">{seconds}</span>
              <span className="text-white">Seconds</span>
            </div>
          </Col>
        </Row>
      </span>
    );
  }
};
export const DayCounter = () => {
  return <Countdown date={Date.now() + 1010100000} renderer={rendering} />;
};
