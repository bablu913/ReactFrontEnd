import React from 'react'

const SponsorCard = (props) => {
  return (
    <div className="card m-2" style={{ width: 18 + "rem" }}>
    <img
      className="card-img-top"
      src="https://media.licdn.com/dms/image/C4D03AQGa189klKJm1w/profile-displayphoto-shrink_200_200/0/1663602840536?e=2147483647&v=beta&t=lKJzjQ-PdBCL0_8zQJc2znS2IC7gvNNovDaoEJwpBJk"
      alt={props.sponsor.sponsorName}
    />
    <div className="card-body">
      <h5 className="card-title">Sponsor Name: {props.sponsor.sponsorName}</h5>
      <h6 className="card-title">Total Payments: ₹{props.sponsor.totalPayments}</h6>
      <span className="badge text-bg-secondary">Date: {props.sponsor.latestPaymentDate}</span>
      <span className="m-1 badge text-bg-primary">
        Number of payments: {props.sponsor.numberOfPayments}
      </span>
      <p className="card-text">Industry Type: {props.sponsor.industryType}</p>
      
    </div>
  </div>
  )
}

export default SponsorCard