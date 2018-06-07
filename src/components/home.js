import React, { Component } from "react";
import {Link} from 'react-router-dom';

const arr = ["Music", "Movies", "YouTube", "Twitter"];

class Home extends Component {

  listItems = arr.map((item,index) => {
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
