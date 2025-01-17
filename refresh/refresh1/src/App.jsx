import { useState } from 'react'
import Note from './Components/Note'
import Form from './Components/Form'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [notes, setNote] = useState([])
  const [toggle, setToggle] = useState(true)
 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return;

    setNote([...notes, inputValue])
    setInputValue('')
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleIncreaseClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecreaseClick = () => {
    setCount(prevCount => prevCount - 1)
  }

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

  return (
    <>
      <div>
        {count}
      </div>
      <div>
        <button onClick={handleIncreaseClick}>Press Me for more</button>
        <button onClick={handleDecreaseClick}>Press Me for less</button>
      </div>
      <div>
        <Form handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputValue={inputValue}/>
      </div>
      <div>
        <p>
        {toggle ? (
          <Note notes={notes}/>
        ) : 'False'}
        </p>
        <button onClick={handleToggle}>{toggle ? 'Toggle is true. Set to false' : 'Toggle is false. Set to True' }</button>
      </div>
    </>
  )
}

export default App
