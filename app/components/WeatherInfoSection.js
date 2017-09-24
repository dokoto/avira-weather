import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './WeatherInfoSection.css';
import { connect } from 'react-redux';

class WeatherInfoSection extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired, 
    pressure: PropTypes.number.isRequired, 
    temp: PropTypes.number.isRequired, 
    temp_max: PropTypes.number.isRequired, 
    temp_min: PropTypes.number.isRequired,
  };

  render() {
    const { name, humidity, pressure, temp, temp_max, temp_min } = this.props;
    console.log('WEATHER>>>>', this.props);
    return (
      <section className={style.main}>
        <h2>Weather Info</h2>
        <ul>
          <li>City: {name}</li>
          <li>Humidity: {humidity}</li>
          <li>Presure: {pressure}</li>
          <li>Temperature: {temp}</li>
          <li>Temperature Max: {temp_max}</li>
          <li>Temperature Min: {temp_min}</li>
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  console.log(state.weather);
  const { name } = state.weather;
  const { humidity, pressure, temp, temp_max, temp_min } = state.weather.main;
  return { name, humidity, pressure, temp, temp_max, temp_min };
}

export default connect(mapStateToProps)(WeatherInfoSection);
