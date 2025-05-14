 
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </div>
  )
}

export default App