
//Receives course object props from App
const Course = ({course}) => { 
    console.log(course)
    return (
      <div>
        <Header course={course} />
        <Content course={course}/>
        <Total course={course} />
      </div>
    )
   }
  
   const Header = ({course}) => { 
    return(
      <h1>{course.name}</h1>
      )
    }
  
    const Content = ({ course }) => {
      // Map over course.parts to render Part components dynamically
      const mappedParts = course.parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ));
    
      return (
        <div>
          {mappedParts}
        </div>
      );
    };
  
  const Part = ({part, exercises}) => {
   return(
     <p>This is coming from the Part component - Part: {part} Exercise: {exercises}</p>
   )
  }
  
  const Total = ({course}) =>{
   console.log('Props from the Total component below:')
   console.log(course)
   const reducedTotal = course.parts.reduce((accumulator, part) => {
   return accumulator + part.exercises}, 0
   )
   return(
     <p>Numer of exercises: {reducedTotal}</p>
   )
  }

  export default Course