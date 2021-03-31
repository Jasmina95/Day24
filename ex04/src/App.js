import React, { Component } from "react";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };

  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem("Arena");

    //console.log(myLocalStorageData);
    return myLocalStorageData;
  };s

  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Set local storage</button>
        <button onClick={this.getLocalStorage}>Get local storage</button>
      </div>
    );
  }
}

export default App;
