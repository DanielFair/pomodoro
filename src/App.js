import React from 'react';
import './App.css';
import Pomodoro from './Pomodoro';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='title'>
          <i><b>Pomodoro Clock</b></i>
        </div>  
        <Pomodoro />
      </div>
    );
  }
}

export default App;
