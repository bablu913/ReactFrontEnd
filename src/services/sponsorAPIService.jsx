import axios from "axios";

const url = 'http://localhost:5260/api/Sponsor/payment-summary'
const addPaymentUrl = 'http://localhost:5260/api/Payment';
const matchByYearURL = 'http://localhost:5260/api/SponsorMatchCount/match-count?year=2024';

async function getSponsors() {
  let data = null;

  try {
    let response = await axios.get(url);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

async function getMatchesByYear(year) {
  let data = null;

  try {
    let response = await axios.get(`${matchByYearURL}`);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

async function addPayment(payment) {
  let data = null;

  try {
    let response = await axios.post(addPaymentUrl, payment);
    if (response.status == 200) {
      data = await response.data;
      console.log(data);
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}

export {getSponsors,addPayment,getMatchesByYear}