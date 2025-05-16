import React from 'react'

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
  <div>
    <li><Part part={props.parts} /></li>
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const SumExcercises = (props) => {
    return(
        <p>total of {props.sum} exercises</p>
    );
}


const Course = ({course}) => {
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course.name} />
      <ul>
        {course.parts.map(part=>
            <Content key={part.id} parts={part} />
            
        )}
      </ul>
      {course.parts.reduce((part)=>
        <SumExcercises sum={totalExercises} />
      ,0)}
    </div>
  )
}

export default Course;
