import React, { Component } from 'react';
import './App.css';
import About from "./components/about";

const title = 'This is the title';
const subtitle = 'This is the subtitle';
const name = 'Jhon';
class App extends Component {
    render() {
        return <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>Hello {name}</p>
            <About label='Sobre mi' url='https://www.google.es'></About>
        </div>
    };

   }


export default App;