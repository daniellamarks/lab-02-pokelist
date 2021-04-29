import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import PokemonSearch from './Search';
// import Paging from './Paging';
import PokemonList from '../pokemon/PokemonList';
import request from 'superagent';

// import './App.css';

const POKEMON_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

class App extends Component {

  state = {
    pokemon: []
  }

  // componentDidMount() {
  //   this.fetchPokemon();
  // }
  
  //this means react is going to call this method on our class when our component is all up and running in the dom. This is where we are going to hook into calling our api.  ON the page load we want to get some initial data. 
  //When i ask this server to give us the data, how long is that going to take. We are making a request and just waiting for the response to get back. 
  //hook into lifecycle method. implement the method and react will call that method at the appropriate time in the component's life cycle. 
  async componentDidMount() {
    console.log('app in dom');
    const response = await request.get(POKEMON_API_URL);
    //data is always on the body or body.results
    //data comes in on the body PROPERTY of the response. 
    console.log(response.body.results);
    this.setState({ pokemon: response.body.results });
  }

    //gets passed whatever the search term is

    //destructure, not a bad idea in a search option because if you have a string and want to add something you either have to break the string to make an object or add more parameters
    //THIS FUNCTION'S PURPOSE IS LIFE IS WHEN YOU CALL IT IT GETS A SEARCH PROPERTY OFF OF OBJECT ((WHAT OBJECT, WHAT IS SEARCH A PROPERTY OF?)) AND LOGS IT. This is the credit card to be handed to the child. 
    //async goes in front of the function, not in front of this = 
   handleSearch = async ({ search }) => {
     console.log(search);
     const response = await request.get(POKEMON_API_URL)
       .query({ pokemon: search });

     this.setState({ pokemon: response.body.results });

   }

   render() {
     const { pokemon } = this.state;

     return (
       <div className="App">
  
         <Header/>

         <section className="search-options">
           <PokemonSearch onSearch={this.handleSearch}/>
           {/* <Paging/> */}
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
