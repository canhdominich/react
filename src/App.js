import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'Initial data...'
    }
    this.updateState = this.updateState.bind(this);
  };
  
  updateState() {
    this.setState({ data: 'Data updated...' })
  }
  render() {
     var helloWorld = "Welcome to the Road to learn React";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {helloWorld}
         </div>
        </header>
      </div>
    );
  }
}
export default App;

