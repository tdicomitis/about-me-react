import React, { Component } from 'react';
import './App.css';
import HelloWorld  from './Hello World';
import Hobbies from './Hobbies';
import Likes from './Likes';
import Wants from './Wants';
import Favorites from './Favorites';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Hobbies />
        <Likes />
        <Wants />
        <Favorites />
      </div>
    );
  }
}

export default App;
