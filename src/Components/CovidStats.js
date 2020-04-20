import React from 'react';

const CovidStats = ({ corona }) => {
  return (
    <table className="table">
      <thead className="thead">
        <tr>
          <th>Date</th>
          <th className="confirmed">Confirmed</th>
          <th className="deaths">Deaths</th>
          <th className="recoveries">Recoveries</th>
    
        </tr>
      </thead>
      <tbody className="tbody">
      { (corona.length > 0) ? corona.map( (covid, index) => {
        
           return (
            <tr key={ index } className="td-bg">
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