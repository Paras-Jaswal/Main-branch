import React from 'react';

const portfolioData = {
  User: [
    { name: 'HDFC Nifty PSU Bank ETF', qty: 20, avgPrice: 101.00, invested: 12020.00, currentPrice: 80.039, todaysGain: 236.20, unrealisedGain: 68019.40, currentValue: 80039.40 },
    { name: 'SBI-ETF Nifty Next 50', qty: 100, avgPrice: 100.00, invested: 10000.00, currentPrice: 785.52, todaysGain: 244.00, unrealisedGain: 68552.00, currentValue: 78552.00 }
  ],
  User1: [
    { name: 'ABC Fund', qty: 50, avgPrice: 200.00, invested: 10000.00, currentPrice: 250.00, todaysGain: 100.00, unrealisedGain: 5000.00, currentValue: 12500.00 }
  ],
  User4: [
    { name: 'XYZ Corp', qty: 30, avgPrice: 300.00, invested: 9000.00, currentPrice: 350.00, todaysGain: 150.00, unrealisedGain: 1500.00, currentValue: 10500.00 }
  ],
  user3: [
    { name: 'LMN Inc', qty: 40, avgPrice: 150.00, invested: 6000.00, currentPrice: 175.00, todaysGain: 200.00, unrealisedGain: 1000.00, currentValue: 7000.00 }
  ]
};

function Portfolio({ activeUser }) {
  let data = [];

  if (activeUser === 'Family Group') {
    data = Object.values(portfolioData).flat();
  } else {
    data = portfolioData[activeUser] || [];
  }

  return (
    <div className="portfolio container-fluid">
      <table className="table-stock">
        <thead>
          <tr className="index ">
            <th>Stocks</th>
            <th  className='text-end' colSpan={2}>Qty.<br/>Avg. Pur. Price</th>
            <th>Amt. Invested</th>
            <th>Current Price</th>
            <th>Today's Gain</th>
            <th>Unrealised Gain</th>
            <th>Current Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className='names' style={{backgroundColor:'#e5e5e5', height:'20px'}}>
          <td colSpan={3} > Stocks</td>
<td colSpan={2}>12,020</td>
<td>+150</td>
<td>+150</td>
<td>51350</td>
          </tr>
          {data.map((item, index) => (
            <tr className='table-row' key={index}>
              <td>{item.name}</td>
              <td colSpan={2} className='text-end'> {item.qty}
                <hr className='m-0 p-0'/>
              {item.avgPrice.toFixed(2)}</td>
              <td>{item.invested.toFixed(2)}</td>
              <td>{item.currentPrice.toFixed(2)}</td>
              <td>{item.todaysGain.toFixed(2)}</td>
              <td>{item.unrealisedGain.toFixed(2)}</td>
              <td>{item.currentValue.toFixed(2)}</td>
            </tr>
          ))}
         
        </tbody>
       
      </table>
    </div>
  );
}

export default Portfolio;
