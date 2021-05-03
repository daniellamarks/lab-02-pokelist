import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import PokemonSearch from './Search';
// import Paging from './Paging';
import PokemonList from '../pokemon/PokemonList';
import request from 'superagent';
import Paging from './Paging';

import './App.scss';

const POKEMON_API_URL = `https://pokedex-alchemy.herokuapp.com/api/pokedex`;

class App extends Component {
//state is an object that stores properties
  state = {
    pokemon: [],
    search: '',
    sortField: undefined,
    directionField: undefined,
    filterField: undefined,
    page: 1,
  }
  
  //this means react is going to call this method on our class when our component is all up and running in the dom. This is where we are going to hook into calling our api.  ON the page load we want to get some initial data. 
  //When i ask this server to give us the data, how long is that going to take. We are making a request and just waiting for the response to get back. 
  //hook into lifecycle method. implement the method and react will call that method at the appropriate time in the component's life cycle. 
  componentDidMount() {
    console.log('app in dom');
    this.fetchPokemon();
  }

  //we make a method because there is repetitive code
  async fetchPokemon() {
    const { 
      search, 
      sortField, 
      directionField,
      page,
      filterField 
    } = this.state;

    //if we don't have anything selected it will stay undefined
    const response = await request.get(POKEMON_API_URL)
      .query({ pokemon: search })
      .query({ sort: sortField || undefined })
      .query({ direction: directionField || undefined })
      .query({ type: filterField || undefined })
      .query({ page: page });
    //data is always on the body or body.results
    this.setState({ pokemon: response.body.results });
    // console.log(response.body.results);
    // console.log(this.state);
  }

    //gets passed whatever the search term is
    //THIS FUNCTION'S PURPOSE IS LIFE IS WHEN YOU CALL IT IT GETS A SEARCH PROPERTY OFF OF OBJECT ((WHAT OBJECT, WHAT IS SEARCH A PROPERTY OF?)) AND LOGS IT. This is the credit card to be handed to the child. 
      
    handleSearch = ({ search, sortField, directionField, filterField }) => {
      console.log(search, sortField);

      this.setState(
        { 
          search: search, 
          sortField: sortField,
          directionField: directionField,
          filterField: filterField
        },
        () => this.fetchPokemon()
      ); 
    }

    //two parameters, first is provide state update second is callback function for what you want tot do when then state is updated. 
    handlePrevPage = () => {
      console.log('prev page');
      this.setState(
        { page: Math.max(this.state.page - 1, 1) },
        () => this.fetchPokemon()
      );};

    handleNextPage = () => {
      console.log('next page');
      this.setState(
        { page: this.state.page + 1 },
        () => this.fetchPokemon()
      );};


     /* this was repetitive code ;
     const response = await request.get(POKEMON_API_URL)
       .query({ pokemon: search });

     this.setState({ pokemon: response.body.results });*/

    render() {
      const { pokemon, page } = this.state;

      return (
        <div className="App">
  
          <Header/>

          <section className="search-options">
            <PokemonSearch 
              onSearch={this.handleSearch}
            />
            <Paging 
              page={page} 
              onPrev={this.handlePrevPage} 
              onNext={this.handleNextPage}/>
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
