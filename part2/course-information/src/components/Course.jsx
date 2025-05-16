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



const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <ul>
        {course.parts.map(part=>
            <Content key={part.id} parts={part} />
        )}
      </ul>
    </div>
  )
}

export default Course;
