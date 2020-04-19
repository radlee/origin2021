import React from 'react';
import axios from 'axios';

  export default class PersonInput extends React.Component {

    state = {
        date : ''
    };

    handelChange = event => {
        this.setState({ name : event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        const query = {
            date : this.state.date
        }

        axios.post('https://api.covid19api.com/live/country/south-africa',  { query })
        .then(res => {
            console.log(res);
            console.log(res.data)
        });
    }
  
      render() {
          return (
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        <input type="text" date='date' onChange={ this.handelChange }/>
                    </label>
                    <button type="submit">Get</button>
                </form>
          )
      }
}