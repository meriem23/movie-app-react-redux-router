import {ADD_MOVIE, DELETE_MOVIE, GET_KEYWORD, GET_RATING, EDIT_MOVIE} from './Types'

export const AddMovie = newMovie => {
    return {
        type: ADD_MOVIE,
        payload: newMovie
    };
};

export const DeleteMovie = id => {
    return {
        type: DELETE_MOVIE,
        payload: id
    };
};

export const getKeyword = keyword => {
    return {
        type: GET_KEYWORD,
        payload: keyword
    };
};

export const getRating = rating => {
    return {
        type: GET_RATING,
        payload: rating
    };
};

export const EditMovie = (id , updatedMovie) => {
    return {
        type: EDIT_MOVIE,
        payload: {id , updatedMovie}
    };
};