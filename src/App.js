import Card from "./components/card";

function App() {
  return (
    <div>
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
