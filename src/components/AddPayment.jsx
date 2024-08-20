import React, { useState } from 'react'
import Navbar from './NavBar'
import { addPayment } from '../services/sponsorAPIService';

const AddPayment = () => {
  const [id, setId] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  
 let date = '2024-08-20';

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newPayment = {
      PaymentId: id,
      amountPaid: amount,
      paymentstatus: status,
      paymentdate: date
    };
    const res = await addPayment(newPayment);
    if (res != null) {
     setId('')
     setAmount('')
     setStatus('')
      alert("Payment Added Successfully");
    } else {
      alert("Payment Not Added");
    }
  };
  return (
    <div>
      <Navbar/>
      <div className="container">
        <h1> Add New Payment</h1>
        <form>
          <div className="form-group ">
            <label forhtml="name">Payment Id</label>
            <input
              onChange={(e) => setId(e.target.value)}
              type="number"
              className="form-control"
              id="name"
              placeholder="id:1"
              
            />
          </div>
          <div className="form-group">
            <label forhtml="setAmount">Amount paid</label>
            <input
              required
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              className="form-control"
              id="setAmount"
              placeholder="189700"
            />
          </div>
          <div className="form-group">
            <label forhtml="paymentStatus">Payment Status</label>
            <input
              onChange={(e) => setStatus(e.target.value)}
              type="text"
              className="form-control"
              id="paymentStatus"
              placeholder="Pending or Completed"
            />
          </div>
        </form>
        <br />
        <button onClick={(e) => handleSubmit(e)}  className="btn btn-primary">
          Add Payment
        </button>
      </div>
      
      </div>
  )
}

export default AddPayment