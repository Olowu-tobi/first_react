function ListGroup() {
    const myCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego"]

    return (

    <>
    <h1>List</h1>
    <ul className="list-group">
     { myCities.map(city => (<li className="list-group-item"  key={city}>{city}</li>))}
    </ul>
    </>
  );
}
export default ListGroup;
