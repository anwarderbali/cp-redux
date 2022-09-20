import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import AddTask from "./Component/AddTask";
import ListTask from "./Component/ListTask";

function App() {
  return (
    <div className="App">
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;