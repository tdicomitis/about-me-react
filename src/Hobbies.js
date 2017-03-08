import React from 'react';
import List from './List'

var Hobbies = React.createClass({
  render: function() {
    return (
      <div className="container my-cont">
        <h4 className="generalinfo"> Hello, my name is Taryn. Here is a page all about me! </h4>
        <ul>
          <h3> Hobbies </h3>
          <ListItem item= {"Hiking"} />
          <li> Skiing </li>
          <li> Traveling </li>
          <li> Playing Video Games </li>
          <li> Eating </li>
          <li> Drinking Wine/Cider </li>
        </ul>
      </div>
    )
  }
});


export default Hobbies;
