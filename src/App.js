import React, { Component } from 'react';
import router from './router';

class App extends Component {
  render() {
    return (
      <section>
        {router}
      </section>
    );
  }
}

export default App;
