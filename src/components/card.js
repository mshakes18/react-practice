function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>Job:{props.job}</p>
      <p>Country:{props.country}</p>
      <p>Age:{props.age}</p>
      <p>Net worth:{props.networth}</p>
    </div>
  );
}
export default Card;
