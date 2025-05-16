import React from 'react'

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <ul>
        {props.parts.map(part=>
            <Part key={part.id} part={part} />
        )}
    </ul>
  </div>
)

const Part = (props) => (
  <li>
    {props.part.name} {props.part.exercises}
  </li>
)

const SumExcercises = (props) => {
    return(
        <p>total of {props.sum} exercises</p>
    );
}


const Course = ({course}) => {
    return(
        <>
        {
            course.map(c=> {
                const totalSum = c.parts.reduce((sum,part) => sum+ part.exercises ,0);
                return(
                <div key={c.id}>
                <Header course = {c.name} />
                <Content parts = {c.parts} />
                <SumExcercises sum={totalSum} />
                </div>
                );
            }
            )
        }
        
        </>
    )
}

export default Course;
