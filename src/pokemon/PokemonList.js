import React, { Component } from 'react';
import PokemonItem from './PokemonItem';

class PokemonList extends Component {

  render() {

    return (
      <ul className="PokemonList">
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
        <PokemonItem/>
      </ul>
    );
  }
}

export default PokemonList;