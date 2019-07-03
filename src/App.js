import React from 'react';
import { directive } from '@babel/types';

const list = [
  {
    title: 'React',
    url: 'https://google.com',
    author: 'Google',
    number_comment: 3,
    points: 9,
    objectId: 0,
  }
];

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      list: list,
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectId} >
            <p>
              <a href={item.url}></a>
            </p>
            <p>
              {item.author}
            </p>
            <p>
              {item.number_comment}
            </p>
            <p>
              {item.points}
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default App;


