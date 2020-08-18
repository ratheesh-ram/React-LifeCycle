import React, {useEffect} from 'react';
import Student from './Student/Student';

const Students = props => {
   //use effect is a React hook. it can possible to give React Class Lifecycle events like componentDidMount and componentDidUpdate. 

    useEffect(()=>{
        console.log('[useEffect] react hook..........');
        //HTTP request can be done here
      const timer=  setTimeout(()=>{
            alert('saving data to server..........');
        },1000);
        //Cleanup Work using useEffect. just return one function. this is equal to unmount hook in class based component
        return ()=>{
            clearTimeout(timer);//this will clean up timer 
            console.log('[useEffect] doing clean up work from......');
        }

    },[]);

    //[] -this will ensure that useEffect only run at the first time. should not repeat untill any dependancy chnages

    //we can use as many useEffect hook in React Function based component
    useEffect(()=>{
        console.log('[useEffect] 2 invoked');
        return ()=>{// this cleanup will be run all the render cycle just before the execution of useEffect function after the execution of first time.
            console.log('[useEffect] 2 doing clean up work from......');
        }
    });
    
    const RenderStudents = props.Students.map(s => {
        return <Student
            deleteClick={()=>props.deleteClick(s.id)}
            name={s.name}
            age={s.age}
            dob={s.dob}
            key={s.id}>
        </Student>
    })
    return (
        <div>
            <h1>{props.heading}</h1>
            {RenderStudents}
        </div>
    );
}
export default React.memo(Students);

//React memo is used to prevent the rerender of the functional compoent. react.memo remember the previous rendering and only rerender if any of the props changed.