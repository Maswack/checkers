import axios from 'axios';
import './App.css';

import Game from './components/game/game';
import Menu from './components/menu/menu';


const apiCall = () => {
  axios.get('http://localhost:3000').then((res) => {
    console.log(res.data);
  })
}

const lolCall = () => {
  axios.get('http://localhost:3000/main').then((res) => {
    console.log(res.data)
  })
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu/>
        <Game/>
      </header>
    </div>
  );
}

export default App;
