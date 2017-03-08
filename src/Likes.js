import React from 'react';
import List from './List'

var Likes = React.createClass({
  render: function() {
    return (
      <div className="container my-cont">
        <h3> Likes </h3>
       <List data= {["Cats", "Cavernet Sauvignon", "Cheese", "Skyrim", "Coffee"]} />
      </div>
    )
  }
});

export default Likes;
