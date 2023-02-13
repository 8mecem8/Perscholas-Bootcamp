import { getAllStarships } from "../../services/sw-api-calls";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const AllStarships = () => 
{
  const [ starshipList, setAllStarships ] = useState([])

  useEffect(() => {(async () => {const sData = await getAllStarships(); setAllStarships(sData.results)})();}, [])






  return(
    <>
      <h1 className='ship-title'>STAR WARS <br/>ships</h1>
      {
        starshipList.length ?

        <div className="cards-container">

          {
            starshipList.map(arg =>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/starships' state={{arg}} key={arg.name}>
              <div className="ship-card" >
                <h2 className="card-title">{arg.name}</h2>
                <p><span>Model:</span>{arg.model}</p>
              </div>
            </Link>
          )}    
        </div>
        :
        <>
        <div className="main-loading">Loading.....</div>
        </>
      }
    </>
  )
}

export default AllStarships