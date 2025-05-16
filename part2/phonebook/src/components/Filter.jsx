const Filter = (props) => {
    return (
      <>
        filter shown with <input type='text' value={props.search} onChange={props.handleSearch} /> <br /><br />
      </>  
    );
}

export default Filter;