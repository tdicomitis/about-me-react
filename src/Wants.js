import React from 'react';
import List from './List'

var Wants = React.createClass({
  render: function() {
    return (
      <div className="container my-cont">
        <h3> Wants </h3>
       <List data= {["Black Toyota 4-Runner", "Move out of Missoula", "Cali King Memory Foam Mattress", "German Shepherd that will be named Nymeria"]} />
      </div>
    )
  }
});

export default Wants;
