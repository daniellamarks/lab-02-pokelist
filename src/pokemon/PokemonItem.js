import React, { Component } from 'react';
import './PokemonItem.scss';

class PokemonItem extends Component {

  render() {

    const pokemon = this.props.pokemon;

    return (
      <li className="PokemonItem">
        <h2>{pokemon.pokemon}</h2>
        <img className="PokemonImage"
          src={pokemon.url_image}
          alt={pokemon.pokemon}
        />
        <p className="Attack">Attack: {pokemon.attack}</p>
        <p className="Defense">Defense: {pokemon.defense}</p>

      </li>


    );
  }
}

export default PokemonItem;