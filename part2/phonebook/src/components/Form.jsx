const Form = (props) => {
    return(
    <form onSubmit={props.addName}>
        <div>
          name: <input value={props.newName} onChange={props.handleInputChange} /><br />
          number: <input type='number' value={props.newNumber} onChange={props.handleNumberChange} />
          
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
}

export default Form;