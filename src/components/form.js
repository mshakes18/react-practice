import { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("");
  const [job, setJob] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [netWorth, setNetWorth] = useState("");

  return (
    <div>
      <form>
        <label for="fname">Famous Persons Name:</label>
        <input
          value={firstName}
          type="text"
          id="fname"
          name="fname"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        ></input>
        <label for="job">Job:</label>
        <input
          value={job}
          type="text"
          id="job"
          name="job"
          required
          onChange={(event) => {
            setJob(event.target.value);
          }}
        ></input>
        <label for="country">country:</label>
        <input
          value={country}
          type="text"
          id="country"
          name="country"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        ></input>
        <label for="age">Age:</label>
        <input
          value={age}
          type="text"
          id="age"
          name="age"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        ></input>
        <label for="networth">Net Worth:</label>
        <input
          value={netWorth}
          type="text"
          id="networth"
          name="networth"
          required
          onChange={(event) => {
            setNetWorth(event.target.value);
          }}
        ></input>
      </form>
      <button>Add Person</button>
    </div>
  );
}
export default Form;
