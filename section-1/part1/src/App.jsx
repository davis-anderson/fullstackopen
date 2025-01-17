const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age}</p>
    </div>
  )
}

const App = () => {
  const name = 'Dean'
  const age = 4
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Davis tst' age={10 + 19}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App