import React, { Component } from 'react';
import Settings from './SettingsSection';
import WeatherInfo from './WeatherInfoSection';
import style from './MainSection.css';

export default class MainSection extends Component {
  render() {
    return (
      <section className={style.main}>
        <WeatherInfo />
        <Settings />
      </section>
    );
  }
}
