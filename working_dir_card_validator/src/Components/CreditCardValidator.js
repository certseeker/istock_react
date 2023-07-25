import React, { useState, useEffect } from 'react';

const CreditCardValidator = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  // Function to check credit card validity using the Luhn Algorithm
  const isValidCreditCard = (cardNumber) => {
    if (!cardNumber) return false;

    let sum = 0;
    let shouldDouble = false;

    // Remove spaces and reverse the number
    const cardDigits = cardNumber.replace(/\s/g, '').split('').reverse();

    for (let digitStr of cardDigits) {
      const digit = parseInt(digitStr, 10);

      if (shouldDouble) {
        let doubled = digit * 2;
        if (doubled > 9) doubled -= 9;
        sum += doubled;
      } else {
        sum += digit;
      }

      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  useEffect(() => {
    setIsValid(isValidCreditCard(creditCardNumber));
  }, [creditCardNumber]);

  return (
    <div>
      <label>Enter Credit Card Number:</label>
      <input
        type="text"
        value={creditCardNumber}
        onChange={(e) => setCreditCardNumber(e.target.value)}
      />
      {isValid === null ? (
        <h2 id="enter">Enter a credit card number to check validity.</h2>
      ) : isValid ? (
        <p>Credit card is valid.</p>
      ) : (
        <p>Credit card is invalid.</p>
      )}
    </div>
  );
};

export default CreditCardValidator;
