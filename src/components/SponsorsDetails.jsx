import React, { useEffect, useState } from 'react'
import Navbar from './NavBar'
import axios from 'axios';
import { getSponsors } from '../services/sponsorAPIService';
import SponsorCard from './SponsorCard';

const SponsorsDetails = () => {

  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    getSponsorHandler();
  }, []);

  async function getSponsorHandler() {
    let data = await getSponsors();
    if (data != null) {
      setSponsors(data);
    }
    console.log(sponsors);
  }

  return (
    <div>
      <Navbar/>
      <h4 className='text-success m-5'>Details of sponsors who have Sponsored the number of matches and the Total amount paid</h4>
      <div className="row ">
        {sponsors.length > 0 ? (
          sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.sponsorID} sponsor={sponsor} />
          ))
        ) : (
          <h1>No Products Found</h1>
        )}
      </div>
    </div>
  )
}

export default SponsorsDetails