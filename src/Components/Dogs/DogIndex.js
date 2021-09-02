import React, { Component } from 'react';
import dogge from './assets/dogge.jpg';
let url = 'https://dog.ceo/api/breeds/image/random'


class DogIndex extends Component {
    constructor() {
        super()
        this.state = {
            dogImage: dogge,
        }
    }

    fetchDog() {
         fetch(url, {
            method: 'GET'
        }) .then(res => res.json())
        .then(res => {
            this.setState({
                dogImage: res.message
            })
        })
        .catch((err) => console.log(err))
    }

    render() {
        return (
            <div>
                <h1>Click the button for pics of puppers</h1>
                <button onClick={() => this.fetchDog()}>Dogge!</button>
                <div>
                    <img src={this.state.dogImage} alt='dog photo'></img>
                </div>
            </div>
        )
    }
}

export default DogIndex;