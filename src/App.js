import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar.jsx";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
