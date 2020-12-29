import React, { Component } from "react";
import Second from "./Second";

export default class First extends React.Component {
  constructor() {
    super();
    this.state = {
      sub1: "ReactJs",
      version: 16.13,
      flag: false,
      obj: {
        e_id: 111,
        e_name: "abc"
      },
      arr: [
        {
          e_no: 111,
          e_name: "e_one",
          e_sal: 1000,
          e_desg: "Developer"
        },
        {
          e_no: 222,
          e_name: "e_two",
          e_sal: 2000,
          e_desg: "senior Developer"
        },
        {
          e_no: 333,
          e_name: "e_one",
          e_sal: 1000,
          e_desg: "Developer"
        },
        {
          e_no: 444,
          e_name: "e_one",
          e_sal: 1000,
          e_desg: "Developer"
        },
        {
          e_no: 555,
          e_name: "e_one",
          e_sal: 1000,
          e_desg: "Developer"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.sub1}</h1>
      </div>
    );
  }
}
