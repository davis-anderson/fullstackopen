import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState()

  //Handle input field change
  const handleInputChange = (event) => {
    setNewName(event.target.value)
  }

  //Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()

    if (persons.some((person) => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} already exists`)
      setNewName('')
      return;
    }
    else{
    setPersons([...persons, {name: newName}])
    setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} type="text" onChange={handleInputChange}/>
        </div>
        <div>
          number: <input value={newNumber} type="number" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}</li>
        ))}
      </ul>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App