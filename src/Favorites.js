import React from 'react';
import List from './List'

var Favorites = React.createClass({
  render: function() {
    return (
      <div className="container my-cont">
        <h3> Favorite Things </h3>
       <List data= {["Color: Lime Green", "Animal: Tiger", "Food: Mexican or Fettuccine Alfredo", "Place: GNP", "Drink: Coffee or Wine", "Place Traveled: Prauge/Austria"]} />
      </div>
    )
  }
});

export default Favorites;
