import "./App.css";
import { AppHeader } from "./AppHeader";
import { ForestMap } from "./map/ForestMap";
import { ForestMapMenu } from "./map/ForestMapMenu";

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div style={{ display: "flex" }}>
        <ForestMap />
        <ForestMapMenu />
      </div>
    </div>
  );
}

export default App;
