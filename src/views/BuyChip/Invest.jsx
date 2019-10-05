import React, { Component } from 'react';
import SimpleCard from './components/SimpleCard';
import axios from 'axios';
import { toaster } from '../../helper/Toaster';

export default class Invest extends Component {
  state = {
    chips: []
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    this._getChips();
  }

  _getChips = () => {
    axios
      .get(
        'http://localhost:5000/chips'
      )
      .then(({ data: response }) => {
        const { data } = response;
        this.setState(prevState => ({
          ...prevState,
          chips: data
        }));
      })
      .catch(err => console.log(err));
  };

  _addToCart = teamId => {
    toaster('success', 'This feature is coming soon');
    console.log(teamId);
  };

  render() {
    const { chips } = this.state;
    const listOfChips = chips.map(chip => (
      <SimpleCard chipData={chip} addToCart={this._addToCart} />
    ));
    return (
      <section id="invest-performance">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="invest-performance">
                <h2>Invest in Your Loved Team’s Performance</h2>
                <p>
                  In the SIM, you are rewarded when your team wins! Invest in
                  chips of your favorite team and reap the benefits of its
                  success. <br />
                  Want to know about how the chips are valued?{' '}
                  <a href="#">Read more.</a>
                </p>
                {listOfChips}
              </div>
              <div className="data-wrap">
                <div className="left">
                  <div className="inner-wrap">
                    <h4 className="text-center">Eastern Conference</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center">Last Name</th>
                          <th colSpan={2}>Price (40%off)</th>
                          {/* <th></th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>MIL</td>
                          <td>
                            <span>$</span>2.35
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>TOR</td>
                          <td>
                            <span>$</span>1.92
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>PHI</td>
                          <td>
                            <span>$</span>2.08
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>BOS</td>
                          <td>
                            <span>$</span>1.99
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>IND</td>
                          <td>
                            <span>$</span>1.45
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>BKN</td>
                          <td>
                            <span>$</span>1.61
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>ORL</td>
                          <td>
                            <span>$</span>1.04
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>DET</td>
                          <td>
                            <span>$</span>1.39
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>CHA</td>
                          <td>
                            <span>$</span>0.60
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>MIA</td>
                          <td>
                            <span>$</span>1.38
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>WAS</td>
                          <td>
                            <span>$</span>0.71
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>ATL</td>
                          <td>
                            <span>$</span>0.75
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>CHI</td>
                          <td>
                            <span>$</span>1.17
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>CLE</td>
                          <td>
                            <span>$</span>0.73
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>NYK</td>
                          <td>
                            <span>$</span>1.33
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td colSpan={3} className="text-center">
                            <a href="#" className="addtocart">
                              Add to Cart
                            </a>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="right">
                  <div className="inner-wrap">
                    <h4 className="text-center">Western Conference</h4>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Last Name</th>
                          <th colSpan={3}>Price (40%off)</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>GSW</td>
                          <td>
                            <span>$</span>2.45
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>DEN</td>
                          <td>
                            <span>$</span>1.69
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>POR</td>
                          <td>
                            <span>$</span>1.78
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>HOU</td>
                          <td>
                            <span>$</span>2.33
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>UTA</td>
                          <td>
                            <span>$</span>1.58
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>OKC</td>
                          <td>
                            <span>$</span>0.91
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>SAS</td>
                          <td>
                            <span>$</span>1.54
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>LAC</td>
                          <td>
                            <span>$</span>2.56
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>SAC</td>
                          <td>
                            <span>$</span>0.91
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>LAL</td>
                          <td>
                            <span>$</span>2.63
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>MIN</td>
                          <td>
                            <span>$</span>0.79
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>MEM</td>
                          <td>
                            <span>$</span>0.54
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>NOP</td>
                          <td>
                            <span>$</span>1.35
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>DAL</td>
                          <td>
                            <span>$</span>0.99
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td>PHX</td>
                          <td>
                            <span>$</span>0.83
                          </td>
                          <td>
                            <input type="text" name />
                          </td>
                        </tr>
                        <tr>
                          <td />
                          <td colSpan={3} className="text-center">
                            <a href="#" className="addtocart" onClick={this._addToCart}>
                              Add to Cart
                            </a>
                          </td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <a href="#" className="buy-low">
                  Buy Low &amp; Sell High
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
