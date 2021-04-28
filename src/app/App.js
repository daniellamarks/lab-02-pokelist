import React, { Component } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import PokemonSearch from './Search';
import PokemonList from '../pokemon/PokemonList'
import './App.css';


class App extends Component {
  
  render() {
    const { pokemon } = this.state

    return (
      <div className="App">
  
        <Header/>

        <section className="search-options">
          <PokemonSearch/>
          <Paging/>
        </section> 
      
        <main>
          <PokemonList pokemon={pokemon}/>
        </main> 

        <Footer/>

      </div>
    );
  }

}

export default App;
