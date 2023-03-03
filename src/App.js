import { useState } from "react";
import Card from "./components/card";
import Form from "./components/form";
// import Counter from "./components/counter";
// import Results from "./components/results";

function App() {
  const [number, setnumber] = useState(5);
  const addfunction = () => {
    console.log("clicking add button");
    setnumber(number + 2);
  };
  return (
    <div>
      <Form />
      <div className="card-container">
        <Card
          name="John Mayer"
          job="Singer"
          country="USA"
          age="44"
          networth="40M"
        />
        <Card
          name="Dwayne Johnson"
          job="actor"
          country="USA"
          age="49"
          networth="320M"
        />
        <Card
          name="Mike Tyson"
          job="boxer"
          country="USA"
          age="55"
          networth="10M"
        />
      </div>
    </div>
  );
}

export default App;
