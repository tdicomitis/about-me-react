import React from 'react';

var ListItem = React.createClass({
  render: function() {
    return (
      <li> {this.props.item} </li>
    )
  }
});

var List = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.data.map(function(item) {
          return <ListItem item= {item}/>
        })}
      </ul>
    )
  }
});


export default List;
