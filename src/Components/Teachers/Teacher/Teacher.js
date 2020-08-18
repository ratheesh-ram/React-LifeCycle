import React from 'react';

const teacher = (props) => {
    console.log('[Teacher.js] rendering');
    return (
        <div>
            <p>Teacher Name : {props.name}</p>
            <p>Course Taken : {props.course}</p>
            <p>Change Teacher Name :</p><input onChange={props.changed}/> 
        </div>
    );
}


export default teacher;