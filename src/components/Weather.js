import React from "react";

export const Weather = (props) => {
  return (
    <div className="weather__info">
      {props.city && props.country && (
        <p className="weather__key">
          Location:
          <span className="weather__value">
            {" "}
            {props.city} {props.country}{" "}
          </span>
        </p>
      )}
      {this.props.temperature && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value">
            {" "}
            {Math.round(props.temperature - 273.15)}{" "}
          </span>{" "}
          ℃
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity:
          <span className="weather__value"> {props.humidity} </span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Conditions:
          <span className="weather__value"> {props.description} </span>
        </p>
      )}
      {props.error && <p className="weather__error">{props.error}</p>}

      <p className="weather__key">
        My GitHub{" "}
        <a className="weather__key" href="https://github.com/alexkozopolianski">
          page
        </a>
      </p>
    </div>
  );
};
