import logo from './logo.svg';
import './App.css';
import PlayerSection from './playerSection/PlayerSection'
import { useEffect,useState } from 'react';
import playersPayload from './mockData/players.json'

function App() {
  const [players,updatePlayers] = useState([]);

  useEffect(() => {
    updatePlayers(playersPayload)
  },[])

  return (
    <div className="App">
      <PlayerSection players={players} />
    </div>
  );
}

export default App;
