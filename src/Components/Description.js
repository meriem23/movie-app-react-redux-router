import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Description extends Component {
  state = {
    movie: {
      name: "",
      rating: 1,
      year: "",
      image: "",
      description: "",
      trailer: ""
    }
  };
  UNSAFE_componentWillMount() {
    this.setState({
      movie: this.props.movies.filter(
        el => el.id === this.props.match.params.id
      )[0]
    });
  }

  render() {
    return (
      <div className="cardDescription">
        <p className="titleDescription">
          {this.state.movie.name} <br /> {this.state.movie.year}
        </p>
        <div className="movieRating">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={this.state.movie.rating}
          />
        </div>
        <p className="textDescription">{this.state.movie.description}</p>
        {/* <img className="imageDescription" src={this.state.movie.image} /> */}
        <div className="btnDescription">
          <a href={this.state.movie.trailer}><i className="fa fa-youtube-play fa-2x yt" style={{ color: "red" }} ></i></a>
          <Link to="/">
            {/* <button className="movieHome">Home</button> */}
            <i class="fas fa-home fa-2x" style={{ color: "red" }}></i>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.MovieReducers.movies
  };
};

export default connect(mapStateToProps)(Description);