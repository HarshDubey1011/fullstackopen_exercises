 
const Header = ({course}) => {
   return (
     <h1>{course}</h1> 
    ); 
  } 

  const Content = ({part1,part2,part3,exercises1,exercises2,exercises3}) => {
     return (
       <>
        <Part name={part1} excercise={exercises1} />
        <Part name={part2} excercise={exercises2} />
        <Part name={part3} excercise={exercises3} />
      </> 
           );
     }

     const Part = ({name,excercise}) => {
        return (
          <p>{name} {excercise}</p>
        );
     }

  const Total = ({exercises1,exercises2,exercises3}) => { 
    return (
       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
       ); 
      }

const App = () => {
const course = 'Half Stack application development'
const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0].name} part2={parts[1].name} part3={parts[2].name} exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  )
}

export default App