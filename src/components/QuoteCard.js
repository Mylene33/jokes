import React, { Component } from "react";
import './QuoteCard.css';

class QuoteCard extends Component {

    constructor(props){
        super(props);

        this.state = {
            joke:null
        }
    }

    handleClick = () => {
        fetch('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((resp) => resp.json())
        .then((data) => this.displayJoke(data)); 
    };

    displayJoke = (joke) => {
        this.setState({joke:joke}); 
    }

    render(){
        return(
            <>
                <button onClick={this.handleClick}>Une nouvelle blague!</button>

                {
                    this.state.joke != null && 

                    <figure className="QuoteCard">
                    <img src={this.state.joke[0].image} alt={this.state.joke[0].character} />
                    <figcaption>
                    <blockquote>{this.state.joke[0].quote}</blockquote>
                    <cite>{this.state.joke[0].character}</cite>
                    </figcaption>
                    </figure>
                        
                }
            </>
        )
    }
}

export default QuoteCard;