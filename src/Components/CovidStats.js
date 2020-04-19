import React from 'react';
import axios from 'axios';

// class CovidStats extends React.Component {
  export default class CovidStats extends React.Component {

    state = {
        covid_data : []
    };

    componentDidMount() {
        axios.get('https://api.covid19api.com/live/country/south-africa').then(res => {
          console.log(res);
          this.setState({ covid_data : res.data });
        });
      }
  
      render() {
          return (
              <ul>
                    { this.state.covid_data.map(data => <h2 key={ data.Date }>{ data.Country }</h2>) }
              </ul>

              
          )
      }
}