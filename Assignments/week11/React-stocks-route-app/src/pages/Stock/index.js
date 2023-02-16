import React from "react";
import { useParams } from "react-router-dom";
import stockData from "../../stock-data";
import "./index.css";

const StockPage = () => {
  let { symbol } = useParams();

  let theStock = stockData.find((element) => element.symbol == symbol);

  console.log(symbol)
  return (
    <div id="one-stock-container">
      <h1>{theStock?.name} ({theStock?.symbol})</h1>
      <h2>Current Price: ${theStock?.lastPrice}</h2>
      <p>${theStock?.open}</p>
      <p>${theStock?.high}</p>
      <p>${theStock?.low}</p>
      <p>{theStock?.change}</p>
    </div>
  );
};

export default StockPage;
