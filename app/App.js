import React, { Component, PropTypes } from 'react';
import Weather from '../modules/weather';
import style from './App.css';

export default class App extends Component {

  render() {
    const { todos, actions } = this.props;

    return (
      <div className={style.normal}>
        <Weather todos={todos} actions={actions} />
      </div>
    );
  }
}
