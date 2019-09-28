import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';
export default class Checkout extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       address1: '',
       address2: '',
       city: '',
       state: '',
       phone_number: '',
       zip: '',
       card_number: '',
       expiry: '',
       security_number: '',
       stripe_flag: false
    }
  }

  handleChange = (e, name) =>{
    this.setState({[name]: e.target.value})
  }
  
  handleClick = () =>{
    console.log('stripe_flag' )
    this.setState({stripe_flag: true})
  }

  onToken = (token, addresses) => {
    console.log('sddfdfdfd', token, addresses)
  };
  render() {
    const { stripe_flag, address1, address2, city, state, phone_number, zip, card_number, expiry, security_number }= this.state;
    return (
      <div>
      
        <section className="home bg-image home-small innerpage" id="home">
        {
        stripe_flag
        &&
<StripeCheckout
        stripeKey="pk_test_mYveNf1EqndKknbNYDBZ7YRG00BQF8WIaQ"
        token={this.onToken}
      />
      }
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row pagetitle">
                  <div className="col-md-12">
                    <h1>Check Out</h1>
                    <h4 className="normal-font-w">
                      The SIM allows you to put your love, passion and
                      analytical skills to the test by trading Goodrich Team
                      Chips (GTC) based on sports performance.
                    </h4>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
          </div>
          {/* end container */}
        </section>
        {/* END HOME */}
        <section className="checkout">
          <div className="container">
            <div className="row">
              <div className="col-md-8 order-md-1">
                <h4 className="heading_text mb-3">Billing Details</h4>
                <form className="needs-validation" noValidate>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="address">Residential Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Residential Address"
                        name={address1}
                        value={address1}
                        onChange={(e)=>this.handleChange(e, 'address1')}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group mb-3">
                      <label htmlFor="address2">
                        Residential Address (line 2){" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Residential Address (line 2)"
                        name={address2}
                        value={address2}
                        onChange={(e)=>this.handleChange(e, 'address2')}
                      />
                    </div>{" "}
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="country">City</label>
                      <select
                        className="custom-select d-block w-100 form-control"
                        id="country"
                        name={city}
                        value={city}
                        onChange={(e)=>this.handleChange(e, 'city')}
                      >
                        <option value>Choose...</option>
                        <option>Cities</option>
                      </select>
                      {/*<div class="invalid-feedback">
        Please select a valid city.
      </div>*/}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="state">State</label>
                      <select
                        className="custom-select d-block w-100 form-control"
                        id="state"
                        name={state}
                        value={state}
                        onChange={(e)=>this.handleChange(e, 'state')}
                      >
                        <option value>Choose...</option>
                        <option>California</option>
                      </select>
                      {/*<div class="invalid-feedback">
        Please provide a valid state.
      </div>*/}
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: 15 }}>
                    <div className="col-md-6 form-group mb-3">
                      <label htmlFor="cc-number">Phone number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="ph-number"
                        placeholder="Phone number"
                        name={phone_number}
                        value={phone_number}
                        onChange={(e)=>this.handleChange(e, 'phone_number')}
                      />
                      {/*<div class="invalid-feedback">
        Card number is required
      </div>*/}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder
                        name={zip}
                        value={zip}
                        onChange={(e)=>this.handleChange(e, 'zip')}
                      />
                      {/*<div class="invalid-feedback">
        Zip code required.
      </div>*/}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 form-group mb-3">
                      <label htmlFor="cc-number">card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder
                        name={card_number}
                        value={card_number}
                        onChange={(e)=>this.handleChange(e, 'card_number')}
                      />
                      {/*<div class="invalid-feedback">
        Card number is required
      </div>*/}
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="cc-expiration">Expiry Date</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder
                        name={expiry}
                        value={expiry}
                        onChange={(e)=>this.handleChange(e, 'expiry')}
                      />
                      {/*<div class="invalid-feedback">
        Expiry date required
      </div>*/}
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="cc-expiration">Security Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder
                        name={security_number}
                        value={security_number}
                        onChange={(e)=>this.handleChange(e, 'security_number')}
                      />
                      {/*<div class="invalid-feedback">
        Security Number required
      </div>*/}
                    </div>
                  </div>
                  <div className="row" style={{ marginTop: 15 }}>
                    <div className="col-md-12">
                      <button
                        className="btn btn-primary btn-lg btn-block pay_now"
                        type="button"
                        onClick={(e)=> this.handleClick(e)}
                      >
                        Pay Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-md-4 order-md-2 mb-4">
                <h4 className="heading_text mb-3 d-flex justify-content-between align-items-center mb-3">
                  Order details
                  {/*<span class="badge badge-secondary badge-pill">3</span>*/}
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Subtotal: $20,000</h6>
                      <small className="text-muted">TAX:(to be decided)</small>
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Estimated Total</h6>
                      <small>You Saved: $XXXXX</small>
                    </div>
                  </li>
                </ul>
                <form className="card p-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Promo code"
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-secondary redeem_btn"
                      >
                        Redeem
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
