import React, { Component } from 'react';

export default class Paging extends Component {
    // state = {
    //   nameFilter: '',
    //   sortField: '',
    //   typeFilter: '',
    // }

    // handleNameChange = ({ target }) => {
    //   this.setState({ nameFilter: target.value });
    // }

    handleSubmit = (e) => {
      e.preventDefault();
    //   this.props.onSearch(this.state);
    }

    render(){

      return (
        <form className="Paging" onSubmit={this.handleSubmit}>

          <button className="prev">◀</button>
          <span>Page 1</span>
          <button className="next">▶</button>

        </form>
      );
    }



}



