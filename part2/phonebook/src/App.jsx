import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }
  console.log(newName);
  const addName = (event) => {
    event.preventDefault();
    const newObject = {
      name: newName
    }
    setPersons(persons.concat(newObject));
    setNewName("");
  }

  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i)=>
        <p key={i}>{person.name.toLocaleUpperCase()}</p>
      )}
    </div>
  )
}

export default App