


import React from 'react';
import KhaltiCheckout from 'khalti-checkout-web';

class PaymentButton extends React.Component {
  componentDidMount() {
    this.handlePaymentClick(); // Call the function to auto run on start
  }

  handlePaymentClick = () => {
    const config = {
      publicKey: 'test_public_key_dc74e0fd57cb46cd93832aee0a390234',
      productIdentity: '1234567890',
      productName: 'Drogon',
      productUrl: 'http://gameofthrones.com/buy/Dragons',
      eventHandler: {
        onSuccess: (payload) => {
          // Hit merchant API for initiating verification
          console.log(payload);
        },
        onError: (error) => {
          // Handle errors
          console.log(error);
        },
        onClose: () => {
          console.log('Widget is closing');
        },
      },
      paymentPreference: ['KHALTI', 'EBANKING', 'MOBILE_BANKING', 'CONNECT_IPS', 'SCT'],
    };

    this.checkout = new KhaltiCheckout(config);

    // Minimum transaction amount must be 10, i.e., 1000 in paisa.
    this.checkout.show({ amount: 1000 });
  };

  render() {
    return (
      <div style={{display: 'none'}}>
        <button id="payment-button" onClick={this.handlePaymentClick}>
          Pay with Khalti
        </button>
      </div>
    );
  }
}


export default PaymentButton;
