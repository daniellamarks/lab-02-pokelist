import React, { Component } from 'react';
import { Footer } from './Footer';
import { Header } from './Header'
import './App.css';


class App extends Component {
  
  render() {
    // const { pokemon } = this.state

    return (
      <div className="App">
  
        <Header/>

        {/* <section className="search-options">
          <VillagerSearch/>
          <Paging/>
        </section>
      
        <main>
          <VillagerList villagers={villagers}/>
        </main> */}

        <Footer/>

      </div>
    );
  }

}

export default App;
