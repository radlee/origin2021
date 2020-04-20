import React, { Component } from 'react';
import axios from 'axios';
import logo from './origin.png';
import './App.css';
import CovidStats from './Components/CovidStats';
import CovidHeader from './Components/CovidHeader';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      corona: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.covid19api.com/live/country/south-africa`)
      .then(res => {
        const corona = res.data.reverse();
        this.setState({ corona });
      });
  }

  render() {
    return (
      <div className="App">
        <CovidHeader />
        <h1><span className="span2">COVID-19</span> Update -> <span className="span">South Africa</span></h1>
        <CovidStats corona={ this.state.corona } />
       <a className="logo_link" href="https://radlee.github.io/origin-about" rel="logo_link">
        <img src={logo} alt="logo" height="60px"/>
        </a>
    </div>
    )
  }
}

export default App;
