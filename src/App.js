import MainData from "./components/MainData"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Aktuálne výsledky* z <a target="_blank" href="https://www.profesia.sk/">profesia.sk</a></h2>
        <p className="vysvetlivka">*Dáta sú zobrazené podľa počtu výsledkov</p>
      </header>
      <main>
        <MainData />
      </main>
    </div>
  );
}

export default App;