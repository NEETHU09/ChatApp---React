import React from 'react';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      message: []
    }
  }

  messageCall = (childData) => {
    this.setState({
      message: [...this.state.message, childData]
    })
  }

  render() {
    const items = this.state.message.map(function(item){
      return <div id="msg"><span>{item}</span></div>
    });

    return (
      <div>        
        <div className = "header">
          <h4 className = "title">Simple Chat App</h4>
          <span>***************************</span>
        </div> 
        <div>
              {items}
        </div>
        <Child parentCall={this.messageCall} />
      </div>
    );
  }
}

class Child extends React.Component{

  onChange = (e) => {
    this.setState({
        value: e.target.value
    })
}

  sendData = () => {
    this.props.parentCall(this.state.value);
  }

  render() {     
    return(
      <div>
        <div className = "container">
          <div className = "small-container">                       
            <input type="text" id="text" onChange={this.onChange} placeholder="Type here"></input>
            <button onClick={this.sendData}>Send</button>
          </div> 
        </div>
      </div>
    )
  }
}

export default App;

