import React, { useState } from "react";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating an API call or async operation
    setTimeout(() => {
      setIsLoading(false);
      setIsPaymentConfirmed(true);
    }, 2000);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <span className="card-title text-5xl blacker leading-12">
            Payment processing...........
          </span>
        </>
      ); 
    } else if (isPaymentConfirmed) {
      return <div>
        <span className="card-title text-5xl blacker leading-12">
        Payment confirmed !!!
        </span>
    </div>; 
    } else {
      return (
        <form
          className="flex flex-col w-2/4 text-xl p-5 px-10"
          style={{ border: "1px solid black" }}
          onSubmit={handleSubmit}
        >
          <div>
            <div className="flex flex-col">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                className="bor_inp"
                type="text"
                id="cardNumber"
                placeholder="card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
              <br />
            </div>

            <div className="flex flex-col">
              <label htmlFor="cardName">Name on Card</label>
              <input
                className="bor_inp"
                type="text"
                id="cardName"
                placeholder="Name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
              <br />
            </div>

            <div className="flex flex-col">
              <label htmlFor="expirationDate">Expiration Date</label>
              <input
                className="bor_inp"
                type="text"
                placeholder="Date"
                id="expirationDate"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
              <br />
            </div>

            <div className="flex flex-col">
              <label htmlFor="securityCode">Security Code</label>
              <input
                className="bor_inp"
                type="text"
                placeholder="security code"
                id="securityCode"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
              <br />
            </div>
          </div>
          <button className="pr_but" style={{ width: "100%" }} type="submit">
            Pay now
          </button>
        </form>
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {renderContent()}
    </div>
  );
};

export default Payment;
