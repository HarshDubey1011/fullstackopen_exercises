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
    const newObject = {
      name: newName,
      number: newNumber
    }
    console.log("exists",exists);
   
    if(exists) {
      const existingPerson = persons.find(p=>p.name=== newName);
      const updateConfirm = window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`);
      if(updateConfirm) {
        phoneBookService.updatePhoneBook(existingPerson.id,newObject).then(updatedPhoneBook=> {
          console.log("updatedPhoneBook",updatedPhoneBook);
          setPersons(persons.map(p => 
          p.id !== existingPerson.id ? p : updatedPhoneBook
        ));
            setNewName("");
            setNewNumber("");
        })
      }
    }
    else {
  phoneBookService.addPhoneBook(newObject).then(returnedPhoneBook => {
  console.log("returnedPhoneBook", returnedPhoneBook);

  // Add the actual object returned from server with ID
  setPersons(prev => [...prev, returnedPhoneBook]);

  setNewName("");
  setNewNumber("");
});


    // setPersons(persons.concat(newObject));
    // setNewName("");
    // setNewNumber("");
  }
  }

   const handleDelete = (id) => {
    const result = window.confirm("Are you sure wanna delete");
    if(result) {
    phoneBookService.deletePhoneBook(id).then(data=> {
      console.log(data);
      const updatedPersons = persons.filter(person=>person.id!=id);
      setPersons(updatedPersons);
    }).catch(error=> {
      console.log(error);
    })
  }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} handleSearch={handleSearch} />
      <Form addName={addName} newName={newName} handleInputChange={handleInputChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Filter2 persons={persons} search={search} onDelete={handleDelete} />
    </div>
  )
}

export default App;