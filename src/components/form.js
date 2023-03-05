import { useState } from "react";
import { useRef } from "react";

function Form(props) {
  const firstNameRef = useRef();
  const jobRef = useRef();
  const countryRef = useRef();
  const ageRef = useRef();
  const netWorthRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = firstNameRef.current.value;
    const enteredJob = jobRef.current.value;
    const enteredCountry = countryRef.current.value;
    const enteredAge = ageRef.current.value;
    const enteredNetWorth = netWorthRef.current.value;

    const famousPersonData = {
      firstname: enteredName,
      job: enteredJob,
      country: enteredCountry,
      age: enteredAge,
      worth: enteredNetWorth,
    };

    console.log(famousPersonData);
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for="fname">Famous Persons Name:</label>
        <input type="text" id="fname" name="fname" ref={firstNameRef}></input>
        <label for="job">Job:</label>
        <input type="text" id="job" name="job" required ref={jobRef}></input>
        <label for="country">country:</label>
        <input type="text" id="country" name="country" ref={countryRef}></input>
        <label for="age">Age:</label>
        <input type="text" id="age" name="age" ref={ageRef}></input>
        <label for="networth">Net Worth:</label>
        <input
          type="text"
          id="networth"
          name="networth"
          required
          ref={netWorthRef}
        ></input>
        <button>Add Person</button>
      </form>
    </div>
  );
}
export default Form;
