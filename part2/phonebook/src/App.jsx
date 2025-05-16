import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: 8989445859 }
  ]) 
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState(0);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const addName = (event) => {
    event.preventDefault();
    
    const exists = persons.some(obj=> obj.name===newName);
    const numberExists = persons.some(obj=> obj.phoneNumber==newNumber);
    console.log(exists);
    console.log(numberExists);
    if(exists) {
      alert(`${newName} is already added to the phonebook`);
    }else if(numberExists) {
      alert(`${newNumber} is already present in the phone book`)
    }
    else {
    const newObject = {
      name: newName,
      phoneNumber: newNumber
    }
    setPersons(persons.concat(newObject));
    setNewName("");
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person,i)=>
        <>
          <p key={i}>{person.name.toLocaleUpperCase()}</p>
          <p>{person.phoneNumber}</p>
        </>
      )}
    </div>
  )
}

export default App