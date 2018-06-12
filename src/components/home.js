import React, { Component } from "react";
import {Link} from 'react-router-dom';

const arr = ["Advice", "Movies", "Gif", "Twitter"];

class Home extends Component {
  listItems = arr.map((item, index) => {
    return (
      <div className="item">
        <Link to={item}>{item}</Link>
      </div>
    );
  });

  render() {
    return (
      <div className="list-page">
        {this.listItems}
      </div>
    );
  }
}

export default Home;
