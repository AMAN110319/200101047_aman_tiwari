import React from "react";

const Train = (props) => {
    const trainName = props.props.trainName;
    const trainNumber = props.props.trainNumber;
    const duration = {
        hours: props.props.departureTime.Hours,
        minutes: props.props.departureTime.Minutes,
        second: props.props.departureTime.Seconds
    }
    const AC= props.props.seatsAvailable.AC;
    const sleeper=props.props.seatsAvailable.sleeper;

    const ACPrice =props.props.price.AC;
    const sleeperPrice=props.props.price.sleeper;
    const delayed =props.props.delayedBy;
  return (
    <>
      <div className="card w-75">
        <div className="card-body">
          <h4 className="card-title">Train Name:{trainName}</h4>
          <p className="card-text">
            Train Number:{trainNumber}
          </p>
          <p className="card-text">
            {`Departure Time:${duration.hours}:${duration.minutes}`}
          </p>
          <p className="card-text">
            AC
            {` Seats Available: ${AC}`}
            {`  Price: Rs${ACPrice}`}
          </p>
          <p className="card-text">
            Sleeper
            {` Seats Available: ${sleeper}`}
            {`    Price: Rs${sleeperPrice}`}
          </p>
          <p className="card-text">
             {`Delayed By: ${delayed} min`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Train;