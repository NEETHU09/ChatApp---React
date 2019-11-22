import React from "react";
import "./App.css";

var spanStyle = {
  color: "green",
  height: "100"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: []
    };
  }

  messageCall = childData => {
    this.setState({
      message: [...this.state.message, childData]
    });
  };

  render() {
    const items = this.state.message.map(function(item) {
      return (
        <div id="msg">
          <span>{item}</span>
        </div>
      );
    });

    return (
      <div className="main">
        <table className="table">
          <thead>
            <h1 className="title">Simple Chat App</h1>
            <span>***************************************************</span>
          </thead>
          <tbody>
            <div className="Items">
              <span style={spanStyle}>{items}</span>
            </div>
          </tbody>
          <Child parentCall={this.messageCall} />
        </table>
      </div>
    );
  }
}

class Child extends React.Component {
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  sendData = () => {
    this.props.parentCall(this.state.value);

    // text.value = ''
    // this.setState({
    //   value: ""
    // });
  };

  render() {
    return (
      <div>
        <table className="smalltable">
          <input
            className="msgtext"
            type="text"
            id="text"
            name="text"
            onChange={this.onChange}
            placeholder="Type here"
          />
          <button onClick={this.sendData} className="btn">
            Send
          </button>
        </table>
      </div>
    );
  }
}

export default App;
