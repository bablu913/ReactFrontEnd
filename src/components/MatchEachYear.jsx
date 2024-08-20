import React, { useState } from 'react'
import Navbar from './NavBar'
import { getMatchesByYear } from '../services/sponsorAPIService';

const MatchEachYear = () => {
  const [year,setYear] = useState('');
  const [data,setData] = useState([]);

  async function getMatchesByYearHandler(year) {
    let data = await getMatchesByYear(year);
    if (data != null) {
      setData(data);
    }
    console.log(data);
  }
  return (
    <div>
      <Navbar/>
      <h4 className='text-success'>Number of Matches Sponsored each Year By Different Sponsors</h4>
      <div className="container">
      <form>
          <div className="form-group ">
            <label forhtml="name">Enter Year</label>
            <input
            value={year}
              onChange={(e) => setYear(e.target.value)}
              type="text"
              className="form-control"
              id="name"
              placeholder="2024"
            />
          </div>
          <button onClick={(e) => getMatchesByYearHandler(e)}  className="btn btn-primary">
          Find Matches
        </button>
      </form>
      </div>

      </div>
  
  )
}

export default MatchEachYear