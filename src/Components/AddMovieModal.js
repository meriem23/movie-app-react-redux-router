import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { AddMovie, EditMovie } from '../Actions/Actions';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'

class AddMovieModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: this.props.editMode ? this.props.movieToEdit.name : "",
      image: this.props.editMode ? this.props.movieToEdit.image : "",
      year: this.props.editMode ? this.props.movieToEdit.year : "",
      rating: this.props.editMode ? this.props.movieToEdit.rating : "",
      description: this.props.editMode ? this.props.movieToEdit.description : "",
      trailer: this.props.editMode ? this.props.movieToEdit.trailer : ""
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  add = () => {
    var newMovie = {
      id: uuidv4(),
      name: this.state.name,
      image: this.state.image,
      year: this.state.year,
      rating: this.state.rating,
      description: this.state.description,
      trailer: this.state.trailer
    };
    this.props.addNewMovie(newMovie);
    this.setState({ show: false });
  };
  editM = () => {
    this.props.EditMovie(this.props.movieToEdit.id, this.state);
    this.setState({ show: false });
  }
  render() {
    return (
      <div>
        {/* <button className="editOradd" onClick={this.handleShow}>
         { this.props.editMode ? "Edit" : "Add Movie"}
        </button> */}
        <i className="far fa-edit editIcon" onClick={this.handleShow}></i>
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Movie Informations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="name"
                  onChange={this.handleChange}
                  value={this.state.name} />
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image"
                  onChange={this.handleChange}
                  value={this.state.image} />
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating"
                  onChange={this.handleChange}
                  value={this.state.rating} />
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year"
                  onChange={this.handleChange}
                  value={this.state.year} />
              </div>
              <div>
                <label>Description:</label>
                <input type="text" name="description"
                  onChange={this.handleChange}
                  value={this.state.discription} />
              </div>
              <div>
                <label>Trailer:</label>
                <input type="text" name="trailer"
                  onChange={this.handleChange}
                  value={this.state.trailer} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button> */}
            <button className="editOradd" onClick={this.props.editMode ? this.editM : this.add}>
              {this.props.editMode ? "Edit" : "Add Movie"}
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMovie: newMovie => dispatch(AddMovie(newMovie)),
    EditMovie: (id, updatedMovie) => dispatch(EditMovie(id, updatedMovie))
  }
}

export default connect(null, mapDispatchToProps)(AddMovieModal);