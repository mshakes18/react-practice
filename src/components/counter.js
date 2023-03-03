const Counter = (props) => {
  return (
    <div>
      <button onClick={props.addnumber}>Add</button>
      <p>Number: {props.mynumber}</p>
    </div>
  );
};

export default Counter;
