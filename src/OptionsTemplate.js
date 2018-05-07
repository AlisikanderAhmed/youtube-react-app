import React from 'react';

export default class App extends React.Component{
  render(){
    var searchResult = this.props.data[0];
    return (
        <div>{searchResult}</div>
    );
  }
};
