import React from 'react';
import logo from './logo.svg';
import './App.css';

class Home extends React.Component {
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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
         </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <button onClick={this.updateState}>CLICK</button>
            <h4>{this.state.data}</h4>
        </header>
      </div>
    );
  }
}
export default Home;