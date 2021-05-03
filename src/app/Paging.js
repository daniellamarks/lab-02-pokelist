import React, { Component } from 'react';

export default class Paging extends Component {


    handleSubmit = (e) => {
      e.preventDefault();
    //   this.props.onSearch(this.state);
    }

    // handlePrev = () => {
    //   this.props.onPrev();
    // }

    // handleNext = () => {
    //   this.props.onNext();
    // }

    render(){

      const { page, onPrev, onNext } = this.props;

      return (
        <form className="Paging" onSubmit={this.handleSubmit}>
          {/* onPrev onNext are handlers inside paging that would call the property handlers passed from the parent that we added?? */}
          <button 
            className="prev" 
            onClick={onPrev}
            disabled={page < 2}  
          >◀</button>
          <span>Page {page}</span>
          <button className="next" onClick={onNext}>▶</button>

        </form>
      );
    }



}



