import React from 'react';

var Likes = React.createClass({
  render: function() {
    return (
      <div className="container my-cont">
        <ul>
          <h3> Things That I Like </h3>
          <li> Cats </li>
          <li> Cabernet Sauvignon </li>
          <li> Cheese (Cheddar FTW) </li>
          <li> Skyrim </li>
          <li> Coffee </li>
          <li> German Shepherds </li>
        </ul>
      </div>
    )
  }
});

export default Likes;
