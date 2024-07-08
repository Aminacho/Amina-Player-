import "./App.css";
import Players from "./components/Players";
import PlayersListe from "./components/PlayersListe";

function App() {
  return (
    <div className="App">
      <h1>
        <i> 🤺 Amina's Player App ⚔️ </i>
      </h1>
      <div className="body">
        <PlayersListe />
      </div>
    </div>
  );
}

export default App;
