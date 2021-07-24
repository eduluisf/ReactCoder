import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@material-ui/core";
import NavBar from "./components/navbar/NavBar.jsx";
import Card from "./components/cards/Card.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Card />

      <Button
        size="large"
        onClick={() => alert("Hello world")}
        variant="contained"
        color="primary"
      >
        Hello World
      </Button>
    </div>
  );
}

export default App;
