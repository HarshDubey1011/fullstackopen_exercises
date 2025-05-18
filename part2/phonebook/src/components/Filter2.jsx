const Filter2 = (props) => {
  console.log("props",props);
    return (
        <>
        {props.persons
        .filter(person => person.name.toLowerCase().includes(props.search.toLowerCase()))
        .map(person => (
          <div key={person.id}>
            <p>{person.name.toUpperCase()}</p>
            <p>{person.number}</p>
          </div>
      ))}
        </>
    );
}

export default Filter2;