import { useState } from 'react'
import PersonsForm from './Components/PersonsForm'
import Debug from './Components/Debug'
import List from './Components/List'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  //State for new name and number input fields
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  //State for filter input and filtered results
  const [filterText, setFilterText] = useState('')
  const [filteredSearch, setFilteredSearch] = useState ('')
 
 //Handle name input change and update state
  const handleNameInputChange = (event) => {
    setNewName(event.target.value)
  }

  //Handle number input change and update state
  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  //Handle filter input change
  const handleFilter = (event) => {
    const searchValue = event.target.value.toLowerCase()
    setFilterText(event.target.value)

    if (searchValue.trim() ===  '') {
      //If filter is empty, reset the filtered search
      setFilteredSearch([])
    } else {
      //Filter the persons list based on the search value
      const filteredResults = persons.filter(person => 
        person.name.toLowerCase().includes(searchValue)
      );
      setFilteredSearch(filteredResults)
    }
  }

  //Handle form submission to add a new person
  const handleSubmit = (event) => {
    event.preventDefault(); //Prevent reload
    if (newName.trim() === '') return; //Ingnore empty input

    //Check if the entered name already exists (case insensitive)
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert('Name already exists');
      setNewName('');
      return;
    }

    //Add the new person to the list
    setPersons([...persons, {
      name : newName,
      number : newNumber
    }])
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Filter: <input value={filterText} onChange={handleFilter} />
      <PersonsForm handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} handleNameInputChange={handleNameInputChange} handleNumberInputChange={handleNumberInputChange}/>
      <h2>Numbers</h2>
      <Debug  newName={newName} filterText={filterText}/>
      <List filterText={filterText} filteredSearch={filteredSearch} persons={persons} />
    </div>
  )
}

export default App