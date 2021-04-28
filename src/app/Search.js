import React, { Component } from 'react';

export default class PokemonSearch extends Component {
    state = {
      search: '',
    }

    handleSearchChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSubmit = (e) => {
      e.preventDefault();
    //   this.props.onSearch(this.state);
        //taking in the properties of the filters we had
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