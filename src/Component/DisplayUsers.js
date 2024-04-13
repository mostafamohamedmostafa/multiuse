function DisplayUsers(props) {
  const Data = props.Data;

  return (
    <div>
      {Data.map((Data) => (
        <div>
          <p>
            Name: <span>{Data.name}</span>
          </p>
          <p>
            Age: <span>{Data.age}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default DisplayUsers;
