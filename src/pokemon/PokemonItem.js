import React, { Component } from 'react';

class PokemonItem extends Component {

  render() {

    return (
      <li className="PokemonList">
        <h2>Pikachu</h2>
        <img 
          src="pikachu.png"
          alt="pickachu"
        />

      </li>


    );
  }
}

export default PokemonItem;