import React from "react";
import UseAuth from "../hooks/UseAuth";
import UseAxios from "../hooks/UseAxios";

const Donation = () => {
  const { user } = UseAuth();
  const axionsInstance = UseAxios()
 
  const payment = (e) => {
    e.preventDefault();
    const DoneteAmount = e.target.amount.value
    const  donoremail = user?.email
    const donorName = user?.displayName

    const formDta = {
        DoneteAmount,
        donoremail,
        donorName
    }
    axionsInstance.post('/create-payment-checkout',formDta)
    .then(res => {
        window.location.href = res.data.url
    })
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={payment} className="fieldset">
              <label className="label">Amount</label>
              <input
                name="amount"
                type="text"
                className="input"
                placeholder="amount"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;