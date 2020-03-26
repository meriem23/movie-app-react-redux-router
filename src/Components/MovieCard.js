import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';
import { DeleteMovie } from '../Actions/Actions';
import AddMovieModal from './AddMovieModal';
import {Link} from 'react-router-dom';

const MovieCard = ({ movie, deleteM }) => {
    return (
        <div className="card">
            <img className="movieImg" src={movie.image} />
            <div className="hoverText">
              <p className="movieText">{movie.name} <br /> {movie.year}</p>
            <div className="movieRating">
                <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={movie.rating} />
            </div>
            <Link to={`/movie/${movie.id}`}>
            {/* <button className="descMovie">Description</button> */}
            <i class="fas fa-info infoIcon"></i>
        </Link>
            <div className="deleteAndedit">
                {/* <button className="deleteMovie" onClick={() => deleteM(movie.id)}>Remove</button> */}
                <i className="far fa-trash-alt delIcon"onClick={() => deleteM(movie.id)} ></i>
                <AddMovieModal editMode={true} movieToEdit={movie} className="edit"/>
            </div>  
            </div>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        deleteM: id => dispatch(DeleteMovie(id))
    };
};

export default connect(null, mapDispatchToProps)(MovieCard);