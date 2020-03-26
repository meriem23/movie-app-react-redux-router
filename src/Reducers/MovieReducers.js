import { v4 as uuidv4 } from 'uuid'
import { ADD_MOVIE, DELETE_MOVIE, GET_KEYWORD, GET_RATING, EDIT_MOVIE } from '../Actions/Types'

const initState = [
    {
        id: uuidv4(),
        name: 'Inception',
        image: 'https://i.pinimg.com/originals/b3/12/09/b31209cd43ba1bde909ebdd01112caf8.jpg',
        rating: 5,
        year: '2010',
        description: "Inception is a 2010 science fiction action film written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.",
        trailer:"https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
        id: uuidv4(),
        name: 'Lord of the Rings: The Two Towers',
        image: 'https://i.pinimg.com/originals/f7/bf/92/f7bf9292cf46b7d62942e4726234f34d.jpg',
        rating: 4,
        year: '2002',
        description: "The two towers between Mordor and Isengard, Barad-dûr and Orthanc, have united in their lust for destruction. The corrupt wizard Saruman, under the power of the Dark Lord Sauron, and his slimy assistant, Gríma Wormtongue, have created a grand Uruk-hai army bent on the destruction of Man and Middle-earth.",
        trailer:"https://www.youtube.com/watch?v=LbfMDwc4azU"
    },
    {
        id: uuidv4(),
        name: 'The Matrix',
        image: 'https://i.pinimg.com/originals/0b/c3/5e/0bc35e809c394a1c56dd23fd33e55de4.jpg',
        rating: 3,
        year: '1999',
        description: "The Matrix is a computer-generated dream world designed to keep these humans under control. Humans are kept sedated, effectively living a virtual life. Neo awakens in a bed back on Morpheus's ship, and Morpheus further explains that one man was born into the Matrix with the power to change anything in it.",
        trailer:"https://www.youtube.com/watch?v=vKQi3bBA1y8"
    }
]

const MovieReducers = (state = { movies: initState, keyword: "", rating: 1 }, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return { ...state, movies: state.movies.concat(action.payload) };
        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter(el => el.id !== action.payload) };
        case GET_KEYWORD:
            return { ...state, keyword: action.payload };
        case GET_RATING:
            return { ...state, rating: action.payload };
        case EDIT_MOVIE:
            return {
                ...state, movies: state.movies.map(el =>
                    el.id === action.payload.id ? { ...el, ...action.payload.updatedMovie } : el)
            };
        default:
            return state;
    }
};

export default MovieReducers