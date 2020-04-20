import React from 'react';

const CovidStats = ({ corona }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Cases Confirmed</th>
          <th>No of Deaths</th>
          <th>No of Recoveries</th>
    
        </tr>
      </thead>
      <tbody>
      { (corona.length > 0) ? corona.map( (covid, index) => {
           return (
            <tr key={ index }>
              <td>{ covid.Date }</td>
              <td>{ covid.Confirmed }</td>
              <td>{ covid.Deaths}</td>
              <td>{ covid.Recovered }</td>
              
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
      </tbody>
    </table>
  );
}

export default CovidStats