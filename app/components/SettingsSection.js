import React, { Component } from 'react';
import style from './SettingsSection.css';

export default class SettingsSection extends Component {

  handleComplete = (text) => {
    this.setState({ city: text });
  };


  render() {
    return (
      <section className={style.main}>
        <h2>Settings</h2>
        <span>Change City </span>
        <select onChange={this.handleComplete}>
          <option value="Madrid">Madrid</option>
          <option value="Berlin">Berlin</option>
        </select>
      </section>
    );
  }
}