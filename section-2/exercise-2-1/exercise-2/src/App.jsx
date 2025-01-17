import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random()< 0.5,
      id: String(notes.length + 1)
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
    console.log(notes)
  }

  const handleNoteChange = (event) =>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
   ? notes 
   : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {/* a button where onClick calls an anon function to 
        set showAll as the opposite once clicked. We call an anon
        function here because onClick={setShowAll(!showAll)} would
        execute immediately when the component renders. Using 
        anon functions in event handlers is common practice to prevent this */}
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      {/* a ul where notesToShow is used to dynamically display which notes
      are to be displayed using the map function. It uses the Note component
      from Note.jsx which has been imported to App.jsx. The props are passed 
      to the Note component. */}
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      {/* a form element with input and button elements.  */}
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNoteChange}/>
          <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App 