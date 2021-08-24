import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:8080')
    .then(res=>res.json())
    .then(data=>{
      console.log("data", data[0].first_column);
      this.setState({
        data: data[0].first_column
      })
    })
    .catch(err=>console.log(err))
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.data}</p>
        </header>
        
      </div>
    );
  }
}

export default App;
