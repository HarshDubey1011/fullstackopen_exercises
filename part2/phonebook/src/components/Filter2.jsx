const Filter2 = (props) => {
    return (
        <>
        {props.persons
        .filter(person => person.name.toLowerCase().includes(props.search.toLowerCase()))
        .map(person => (
          <div key={person.id}>
            <p>{person.name.toUpperCase()}</p>
            <p>{person.phoneNumber}</p>
          </div>
      ))}
        </>
    );
}

export default Filter2;