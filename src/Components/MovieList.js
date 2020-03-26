import React, { Component } from 'react'
import MovieCard from './MovieCard'
import { connect } from 'react-redux'


class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="movieList">
        {this.props.AllData.movies.filter(el =>
          el.rating >= this.props.AllData.rating &&
          el.name.toLowerCase().includes(this.props.AllData.keyword.trim().toLowerCase())).map(
            el => (<MovieCard movie={el} />
            ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    AllData: state.MovieReducers
  };
};


export default connect(mapStateToProps)(MovieList);