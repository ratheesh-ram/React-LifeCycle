import React, { Component } from "react";
import Teacher from "./Teacher/Teacher";

class Teachers extends Component {
  // constructor(props){
  //     super(props);
  // }

  // static getDerivedStateFromProps(props,state){
  //     console.log('[Teachers.js] getDerivedStateFromProps' );
  //     return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Teachers.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Teachers.js] getSnapshotBeforeUpdate");
    return null;
  }

  //componentWillUnmount will be used for cleanup work
  componentWillUnmount() {
    console.log("[Teachers.js] componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Teachers.js] componentDidUpdate");
  }

  render() {
    console.log("[Teachers.js] rendering");
    return this.props.Teachers.map((t) => {
      return (
        <Teacher
          name={t.name}
          course={t.course}
          key={t.id}
          changed={(event) => this.props.changeName(event, t.id)}
        />
      );
    });
  }
}

export default Teachers;
