import { useState } from 'react'
import Filter from './components/Filter';
import Form from './components/Form';
import Filter2 from './components/Filter2';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122', id: 4 }
  ])
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState('');

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
    
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
    setNewNumber("");
  }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <Form addName={addName} newName={newName} handleInputChange={handleInputChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Filter2 persons={persons} search={search} />
    </div>
  )
}

export default App