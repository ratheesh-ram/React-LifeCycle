//import React, { Component } from 'react';
// import logo from './logo.svg';
import React, { PureComponent } from "react";
import "./App.css";
import Students from "./Components/Students/Students";
import Teachers from "./Components/Teachers/Teachers";

/*PureComponent is a component where in shouldComponentUpdate logic is already written. this will ensure that only if component will rerender if any props has been changed.*/

class App extends PureComponent {
  //First Life cycle hook
  constructor(props) {
    super(props);
    //State can be set with Constructor
    console.log("[App.js] construtor executed");
  }
  //State is a mordern syntax it behind the screen executing the constructor
  state = {
    Students: [
      { id: 1, name: "Sumithra", age: 30, dob: "23-07-1900" },
      { id: 2, name: "Ratheesh", age: 36, dob: "23-05-1983" },
      { id: 3, name: "Vyshnavi", age: 5, dob: "29-07-2014" },
      { id: 4, name: "Vedashree", age: 2, dob: "23-05-2016" },
      { id: 5, name: "Vrinda", age: 0, dob: "07-04-2019" },
    ],
    Teachers: [
      { id: 1, name: "Teacher-Ram", course: "MCSC" },
      { id: 2, name: "Mr. Abilash", course: "Computer Hardware" },
      { id: 3, name: "Sneha", course: "Software Engineering" },
    ],
    ShowStudent: true,
  };

  //Second Lifecycle hook
  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps executed", props);
    return state;
  }

  //Last Component Life cylcle  hook
  componentDidMount() {
    console.log("[App.js] componentDidMount executed");
  }

  /* UPDATE Component Life Cyle */

  /* shouldComponentUpdate(nextProps, nextState){
         console.log('[app.js] shouldComponentUpdate');
         return true;
         
             Should component update checking whether Student has to rerender or Not
 
             if(nextProps.Students!==this.state.students){
                 return true;
             }else{
                 return false
             }
 
     }*/

  componentDidUpdate() {
    console.log("[app.js] componentDidUpdate");
  }

  deleteStudentEventHandler = (id) => {
    const students = [...this.state.Students];
    const sIndex = students.findIndex((s) => s.id === id);
    if (sIndex !== undefined) {
      students.splice(sIndex, 1);
      this.setState({
        Students: students,
      });
    }
  };

  changeTeacherNameEventHandler = (e, id) => {
    const teachers = [...this.state.Teachers];
    const teacherIndex = teachers.findIndex((t) => t.id === id);
    if (teachers !== undefined) {
      teachers[teacherIndex].name = e.target.value;

      /* Normal Syntax */
      // this.setState({ Teachers: teachers });

      //set state optional syntax. this will ensure that state will update immediatly
      this.setState((prevState, props) => {
        return {
          Teachers: teachers,
        };
      });
    }
  };

  swapStudentTeacherEventHandler = () => {
    // const show=Object.assign({},this.state);
    // show.ShowStudent=!show.ShowStudent;
    // this.setState({ShowStudent: show.ShowStudent});
    const showStud = this.state.ShowStudent;
    this.setState({ ShowStudent: !showStud });
  };

  render() {
    //Third Life Cycle hook is the render method. Then after all the child component will be render
    console.log("[App.js] render executed");
    return (
      <div className="App">
        <p>{this.props.title}</p>
        <button onClick={this.swapStudentTeacherEventHandler}>
          Show Studnets
        </button>
        <button onClick={this.swapStudentTeacherEventHandler}>
          Show Teachers
        </button>
        {this.state.ShowStudent ? (
          <Students
            heading="Student List"
            Students={this.state.Students}
            deleteClick={this.deleteStudentEventHandler}
          />
        ) : (
          <Teachers
            Teachers={this.state.Teachers}
            changeName={this.changeTeacherNameEventHandler}
          />
        )}
      </div>
    );
  }
}

export default App;
