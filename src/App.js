import axios from 'axios';
import './App.css';

import Game from './components/game/game';
import Menu from './components/menu/menu';

import 'bootstrap/dist/css/bootstrap.min.css'
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>


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
      <div className="App-header d-flex flex-column justify-content-center align-items-start">
        <Menu/>
        <Game/>
      </div>
    </div>
  );
}

export default App;
