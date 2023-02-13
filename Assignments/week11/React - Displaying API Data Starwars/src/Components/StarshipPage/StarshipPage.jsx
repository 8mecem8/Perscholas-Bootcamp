import { getStarshipDetails } from '../../services/sw-api-calls'
import { useLocation } from 'react-router-dom'

import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'



const SsDetails = () => {
  const [ship, setship] = useState({})
  const location = useLocation()

  

  useEffect(() => 
  {
    if(location)
    {
      (async()=>{const starshipData = await getStarshipDetails(location?.state.arg.url); setship(starshipData)})()
    }
  }, [location])
 


  return ( 
    <>
    <h1 className='ship-title'>STAR WARS <br/>ships</h1>
 
      {ship.length ?

      <div className='ship-details-container'>
        <div className='ship-details-card'>
          <h2>NAME: {ship.name} </h2>
          <p><span>Model:</span>{ship.model}</p>
          <p><span>manufacturer:</span>{ship.manufacturer}</p>
          <div className='ship-specs'>
            <p>Specification</p>
            <p><span>Class:</span>{ship.starship_class}</p>
            <p><span>Length:</span>{ship.length}</p>
            <p><span>Cargo Capacity:</span>{ship.cargo_capacity}</p>
            <p><span>Crew:</span>{ship.crew}</p>
            <p><span>Max Speed:</span>{ship.max_atmosphering_speed}</p>


          </div>
        </div>
          <button><Link style={{ color: 'white' }} to="/"> RETURN </Link></button>
      </div>

      :

      <div className="main-loading">Loading.....</div>

      }
    </>
  )
}

export default SsDetails;