import React, { Component } from 'react';
import './Search.scss';


export default class PokemonSearch extends Component {
    //here the component keeps track of whatever the current value is that the user has been typing in there
    state = {
      search: '',
      sortField: '',
    }
    //this handling is so that this can keep up with whatever is in the box
    handleSearchChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSortField = ({ target }) => {
      this.setState({ sortField: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();

    //when it gets submitted we say: 
    //it's time to call it, the form got submitted it's time to use the function that our parents gave us and an object that has a search property is essentially state on this component so pass this.state as teh callback value
      this.props.onSearch(this.state);

    }

    render() {
      const { search, sortField } = this.state;

      return (
        <form className="Search" onSubmit={this.handleSubmit}>

          <input
            name="search"
            value={search}
            onChange={this.handleSearchChange}
          />

          <select
            name="sortField"
            value={sortField}
            onChange={this.handleSortField}
          >
            <option value="">Sort...</option>
            <option value="name">By name</option>
            <option value="type">By type</option>
            <option value="Shape">By type</option>
            <option value="Ability">By type</option>


          </select>

          <button>🔎</button>

        </form>
      );
    }

}