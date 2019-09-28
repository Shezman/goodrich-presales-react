import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          items: "TOR",
          price: 1.0,
          amount: 0,
          total: 0
        },
        {
          items: "CHI",
          price: 1.00,
          amount: 0,
          total: 0
        },
        {
          items: "MEM",
          price: 1.00,
          amount: 0,
          total: 0
        },
        {
          items: "Favourite",
          price: 6000,
          amount: 0,
          total: 0
        },
        {
          items: "Supporters",
          price: 4000,
          amount: 0,
          total: 0
        }
      ],
      total_amount: 0
    };
  }

  handleChange = (e, key) =>{
    var data = this.state.data;
    let total_amount= 0
    data[key].amount = e.target.value ? parseInt(e.target.value) : 0
    data[key].total = data[key].price * (e.target.value ? parseInt(e.target.value) : 0)
    total_amount= data.map(item => item.total)
        .reduce((a, c) => a + c);
    this.setState({data: data, total_amount: total_amount})
  }

  handleCheckout = (e) =>{
    this.props.history.push('/checkout')
  }

  render() {
    const { data, total_amount } = this.state;
    return (
      <div>
        <section className="home bg-image home-small innerpage" id="home">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row pagetitle">
                  <div className="col-md-12">
                    <h1>Cart Page</h1>
                  </div>
                </div>
              </div>{" "}
              {/* end col */}
            </div>{" "}
            {/* end row */}
            <div className="row cart_pge">
              <div className="col-md-8">
                <table className="table cart_page_table">
                  <thead>
                    <tr>
                      <th>Items In Cart</th>
                      <th>Price</th>
                      <th>Amount</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, key) => {
                      return (
                        <tr>
                          <td>{item.items}</td>
                          <td>${item.price}</td>
                          <td><input type='text' value={item.amount} onChange={(e)=>this.handleChange(e, key)} /></td>
                          <td>${item.total}</td>
                          <td>
                            <i className="fa fa-trash-o" aria-hidden="true" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col-md-4 order-md-2 mb-4">
                <h4 className="heading_text mb-3 d-flex justify-content-between align-items-center mb-3">
                  Order Summary
                  {/*<span class="badge badge-secondary badge-pill">3</span>*/}
                </h4>
                <ul className="list-group mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Subtotal: ${total_amount}</h6>
                      <small className="text-muted">TAX:(to be decided)</small>
                    </div>
                  </li>
                  {/* <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Estimated Total</h6>
                      <small>You Saved: $XXXXX</small>
                    </div>
                  </li> */}
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <button
                      type="submit"
                      className="btn btn-secondary checkout_btn"
                      onClick={(e)=>this.handleCheckout(e)}
                    >
                      CHECKOUT
                    </button>
                  </li>
                </ul>
                {/* <form className="card p-2">
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
                </form> */}
              </div>
            </div>
            {/* <div className="row">
              <div className="col-md-12" style={{ marginTop: 40 }}>
                <table className="table packages">
                  <thead>
                    <tr>
                      <th>Recomended for you</th>
                      <th>Packages</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Xxxx package</td>
                      <td>$xxx</td>
                      <td>ADD</td>
                    </tr>
                    <tr>
                      <td>Xxxx chip</td>
                      <td>XXX</td>
                      <td>ADD</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
          {/* end container */}
        </section>
      </div>
    );
  }
}
