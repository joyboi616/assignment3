import React, { Component } from 'react';
/* import DatePicker from 'react-datepicker'; */
import "react-datepicker/dist/react-datepicker.css";

export default class MarvelMoviesCreate extends Component {
  constructor(props) {
    super(props);

    this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
    this.onChangeDirector = this.onChangeDirector.bind(this);
    this.onChangeReleaseDate = this.onChangeReleaseDate.bind(this);
    this.onChangeBoxOffice = this.onChangeBoxOffice.bind(this);
    this.onChangeRottenTomatoes = this.onChangeRottenTomatoes.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      movieTitle: '',
      director: '',
      releaseDate: new Date(),
      boxOffice: '',
      rottenTomatoes: '',
      marvelMovies: []
    }
  }

  componentDidMount(e) {
    this.setState({
      marvelMovies: ['test movie'],
      movieTitle: 'test movie',
      director: 'test movie',
      releaseDate: 'test movie',
      boxOffice: 'test movie',
      rottenTomatoes: 'test movie'
    })
  }

  onChangeMovieTitle(e) {
    this.setState({
      movieTitle: e.target.value
    });
  }

  onChangeDirector(e) {
    this.setState({
      director: e.target.value
    });
  }

  onChangeReleaseDate(date) {
    this.setState({
      releaseDate: date
    });
  }

  onChangeBoxOffice(e) {
    this.setState({
      boxOffice: e.target.value
    });
  }

  onChangeRottenTomatoes(e) {
    this.setState({
      rottenTomatoes: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const marvelMovie = {
      movieTitle: this.state.movieTitle,
      director: this.state.director,
      releaseDate: this.state.releaseDate,
      boxOffice: this.state.boxOffice,
      rottenTomatoes: this.state.rottenTomatoes,
    }

    console.log(marvelMovie)

    window.location = '/marvelList'
  }

  render() {
    return (
    <div>
      <h3>Create New Marvel Movie</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Movie Title: </label>
          <select ref="userInput"
            required
            className="form-control"
            value={this.state.movieTitle}
            onChange={this.onChangeMovieTitle}>
            {
              this.state.movieTitle.map(function(movieTitle) {
                return <option 
                  key={movieTitle}
                  value={movieTitle}>{movieTitle}
                  </option>;
              })
            }
          </select>



        </div>
        <div className="form-group">
          <input type="submit" value="Create Marvel Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}


