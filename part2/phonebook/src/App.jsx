import { useState, useEffect } from 'react'
import axios from 'axios';
import phoneBookService from './services/phoneBookService';
import Filter from './components/Filter';
import Form from './components/Form';
import Filter2 from './components/Filter2';

const App = () => {
  const [persons, setPersons] = useState([
  ])
  
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log("Effect");
    axios.get('http://localhost:3001/persons').then(response=> {
      console.log(response.data);
      setPersons(response.data);
    })
  },[]);
  console.log("There are ",persons.length,"persons");

  


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
      number: newNumber
    }
    console.log("i was here");
    phoneBookService.addPhoneBook(newObject).then(returnedPhoneBook => {
      console.log("returnedPhoneBook",returnedPhoneBook)
      setPersons(persons.concat(newObject));
      console.log(persons);
      setNewName("");
      setNewNumber("");
    })

    // setPersons(persons.concat(newObject));
    // setNewName("");
    // setNewNumber("");
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