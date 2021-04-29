import React, { Component } from 'react';

export default class PokemonSearch extends Component {
    //here the component keeps track of whatever the current value is that the user has been typing in there
    state = {
      search: '',
    }
    //this handling is so that this can keep up with whatever is in the box
    handleSearchChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();

    //when it gets submitted we say: 
    //it's time to call it, the form got submitted it's time to use the function that our parents gave us and an object that has a search property is essentially state on this component so pass this.state as teh callback value
      this.props.onSearch(this.state);

    }

    render() {
      const { search } = this.state;

      return (
        <form className="Search" onSubmit={this.handleSubmit}>

          <input
            name="search"
            value={search}
            onChange={this.handleSearchChange}
          />

          <button>Search</button>

        </form>
      );
    }

}