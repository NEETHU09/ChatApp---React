
import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import logo from './logo.svg';

class App extends Component {
  
  componentDidMount() {
    addResponseMessage("Welcome to Simple Chat");
  }

  onChange = (msg) => {
    console.log(`New incoming message! ${msg}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          onChange={this.onChange}
          profileAvatar={logo}
          title="Simple Chat App"
          subtitle="******************************************"
        />
      </div>
    );
  } 
}

export default App;








// import React, { Component } from 'react';
// import { Widget } from 'react-chat-widget';

// import 'react-chat-widget/lib/styles.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Widget />
//       </div>
//     );
//   }
// }

// export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
