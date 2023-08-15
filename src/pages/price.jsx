import React, { useEffect, useState } from 'react';
import '../styles/price.css'

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://kalimatimarket.gov.np/api/daily-prices/en')
      .then(response => response.json())
      .then(data => {
        setData(data.prices);
      })
      .catch(error => console.error('Error fetching JSON data:', error));
  }, []);

  return (
    <div>
      <h1>Daily Kalimati Prices</h1> 
      <table id="data-table">
        <thead>
          <tr>
            <th>Items Name</th>
            <th>Items Unit</th>
            <th>Min Price</th>
            <th>Max Price</th>
            <th>Avg Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.commodityname}>
              <td>{item.commodityname}</td>
              <td>{item.commodityunit}</td>
              <td>{item.minprice}</td>
              <td>{item.maxprice}</td>
              <td>{item.avgprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
