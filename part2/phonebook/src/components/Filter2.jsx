import phoneBookService from "../services/phoneBookService";

const Filter2 = (props) => {
  console.log(props.persons);
    return (
        <>
        {props.persons
        .filter(person => person.name.toLowerCase().includes(props.search.toLowerCase()))
        .map(person => (
          <div key={person.id}>
            <p>{person.name.toUpperCase()}</p>
            <p>{person.number}</p>
            {person.id}
            <button onClick={()=>props.onDelete(person.id)}>delete</button>
          </div>
      ))}
        </>
    );
}

export default Filter2;