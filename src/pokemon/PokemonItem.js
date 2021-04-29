import React, { Component } from 'react';

class PokemonItem extends Component {

  render() {

    const pokemon = this.props.pokemon;

    return (
      <li className="PokemonItem">
        <h2>{pokemon.pokemon}</h2>
        <img 
          src={pokemon.url_image}
          alt={pokemon.pokemon}
        />
        <p>Attack: {pokemon.special_attack}</p>
        <p>Defense: {pokemon.special_defense}</p>

      </li>


    );
  }
}

export default PokemonItem;