import React, {useRef}  from 'react';
import classes from './Student.module.css';
import Aux from '../../../hoc/Auxillary/Auxillary';
import withClass from '../../../hoc/withClass';
//import propTypes from 'prop-types';

//  <React.Fragment> this is inbuild HOC for react. instead of Aux we can use Fragment

const student = (props) => {
   // const toggleButtonRef = useRef(null);
    // useEffect(() => {
    //     toggleButtonRef.current.click();
    // }, []);



    // useEffect(()=>{
    //     console.log('[useEffect] 2 invoked');
    //     return ()=>{// this cleanup will be run all the render cycle just before the execution of useEffect function after the execution of first time.
    //         console.log('[useEffect] 2 doing clean up work from......');
    //     }
    // });





    return (
        <Aux>
            <p className={classes.red}>Student Name : {props.name} </p>
            <p>Student Age : {props.age} </p>
            <p>Student Name : {props.dob} </p>
            <button>Add</button>
            <button onClick={props.deleteClick} >Remove</button>

            <p> this is example of HOC</p>
        </Aux>
    );


}

// student.propTypes = {
//     age: propTypes.number

// }

export default withClass(student, classes.Student);