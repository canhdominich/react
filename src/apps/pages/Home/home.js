import React from 'react';

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
          <div>
            <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
            {this.props.children}
         </div>

            <button onClick={this.updateState}>CLICK</button>
            <h4>{this.state.data}</h4>
        </header>
      </div>
    );
  }
}

export default Home;