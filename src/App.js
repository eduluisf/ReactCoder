import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar.jsx";
import ItemListContainer from "./components/itemlistcontainer/ItemListContainer.jsx";
import ItemCount from "./components/itemcount/ItemCount.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
