import React, { Component } from 'react';
/* import axios from 'axios'; */
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class MarvelMoviesCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieTitle: '',
      director: '',
      releaseDate: new Date(),
      boxOffice: '',
      rottenTomatoes: '',
      users: []
    }
  }

  render() {
    return (
      <div>
        <p>create</p>
      </div>
    )
  }
}