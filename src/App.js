import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import AddMovieModal from "./Components/AddMovieModal";
import Filter from "./Components/Filter";

function App() {
  return (
    <div className="App container">
      <Filter />
      <MovieList />
      <AddMovieModal editMode={false} />
    </div>
  );
}

export default App;
