import { useState } from "react";
import { useNavigate } from "react-router-dom";
import stockData from "../../stock-data.js";
import "./index.css";

const DashboardPage = () => {
  const navigate = useNavigate();


  const [stocks, setStocks] = useState(stockData);

 


  return (
        <div id="dashboard-container">
          <h1 >Stocks Dashboard</h1>
          
          <div id="stocks-container">
          {
            stocks.map((arg,i) => 
            {
                return (
                  <div onClick={()=>navigate(`/stocks/${arg.symbol}`)}>
                    <p >{arg.symbol}</p>
                    <p>{arg.name}</p>
                    <p>${arg.lastPrice}</p>
                    <p>{arg.change}</p>
                  </div>
                );
            })
          }
          </div>

        </div>
  );
};

export default DashboardPage;
