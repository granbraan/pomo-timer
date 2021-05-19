import { render } from '@testing-library/react';
import '../App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {

    }
  }
  render() {
      return (
    <main>
      <h2>Pomodoro Timer</h2>
    </main>
  );
  }

}

export default App;
