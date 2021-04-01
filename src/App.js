import MainData from "./components/MainData"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Aktuálne výsledky* z <a target="_blank" rel="noreferrer" href="https://www.profesia.sk/">profesia.sk</a></h2>
        <p className="vysvetlivka">*Dáta sú zobrazené podľa počtu výsledkov s názvom jazyku. Výsledky nemusia byť presné.</p>
      </header>
      <main>

        <MainData />
      </main>
    </div>
  );
}

export default App;