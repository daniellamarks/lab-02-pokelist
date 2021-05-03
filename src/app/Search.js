import React, { Component } from 'react';
import './Search.scss';


export default class PokemonSearch extends Component {
    //here the component keeps track of whatever the current value is that the user has been typing in there
    state = {
      search: '',
      sortField: '',
      directionField: '',
      filterField: '',
    }
    //this handling is so that this can keep up with whatever is in the box
    handleSearchChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleDirectionField = ({ target }) => {
      this.setState({ directionField: target.value });
    }
 
    handleFilterField = ({ target }) => {
      this.setState({ filterField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();

    //when it gets submitted we say: 
    //it's time to call it, the form got submitted it's time to use the function that our parents gave us and an object that has a search property is essentially state on this component so pass this.state as teh callback value
      this.props.onSearch(this.state);

    }

    render() {
      const { search, sortField, directionField, filterField } = this.state;

      return (
        <form className="Search" onSubmit={this.handleSubmit}>

          <input
            name="search"
            value={search}
            onChange={this.handleSearchChange}
          />

          <select
            className="dropdown"
            name="sortField"
            value={sortField}
            onChange={this.handleSortField}
          >
            <option value="">Sort...</option>
            <option value="pokemon">Name</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
           
          </select>

          <select
            className="dropdown"
            name="directionField"
            value={directionField}
            onChange={this.handleDirectionField}
          >
            <option value="">Direction...</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>           
          </select>

          <select
            className="dropdown"
            name="filterField"
            value={filterField}
            onChange={this.handleFilterField}
          >
            <option value="">Type:</option>
            <option value="bug">bug</option>
            <option value="normal">normal</option>
            <option value="fire">fire</option>
           
          </select>

          <button>（╯°□°）╯︵◓ </button>

        </form>
      );
    }

}