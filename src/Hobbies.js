import React from 'react';
import List from './List';

var Hobbies = React.createClass({
  render: function() {
    return (
      <div className="container my-cont">
        <h4 className="generalinfo"> Hello, my name is Taryn. Here is a page all about me! </h4>
        <h3> Hobbies </h3>
       <List data= {["Hiking", "Skiing", "Traveling", "Playing Video Games", "Eating", "Drinking Wine/Cider"]} />
      </div>
    )
  }
});


export default Hobbies;
