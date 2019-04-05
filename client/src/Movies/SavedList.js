import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.savedList,

    };
  }





  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div>
        <Link to ="/"><div className="home-button">Home</div></Link>
        <div className="clear-button" onClick={this.props.clearSaved}>Clear</div>
        </div>
      </div>
    );
  }
}
