import React, { Component } from 'react';

export default class Exchange extends Component {
  render() {
    return (
      <div>
        <div id="overlayLoader">
          <div id="preloader">
            <span />
            COMING SOON
            <span />
          </div>
        </div>
        <section className="wrapper">
          <nav className="navbar navbar-default navbar-top navbar-fixed-top">
            <div className="navbar-header">
              <a href="../index.html" className="navbar-brand">
                <div className="brand-logo">Goodrich</div>
                <div className="brand-logo-collapsed">
                  <i className="fa fa-bitcoin" />
                </div>
              </a>
            </div>
            <div className="nav-wrapper">
              <ul className="nav navbar-nav mt0">
                <li>
                  <a href="#" data-toggle="aside">
                    <strong>
                      <em className="fa fa-shopping-cart" /> Buy/Sell (THIS IS
                      JUST A PREVIEW OF OUR UPCOMING TERMINAL)
                    </strong>
                  </a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right mt0">
                {/* <li class="dropdown dropdown-list">
               <a href="#" data-toggle="dropdown" data-play="bounceIn" class="dropdown-toggle">
               <strong><i class="fa fa-GTC"></i> Wallet</strong>
               </a>
            </li> */}
                <li className="dropdown dropdown-list">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    data-play="bounceIn"
                    className="dropdown-toggle"
                  >
                    <em className="fa fa-bell" />
                    <div className="label label-danger">3</div>
                  </a>
                  <ul className="dropdown-menu col-md-4 col-sm-6 col-xs-12">
                    <li>
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Buy/Sell</th>
                              <th>Progress</th>
                              <th>Date</th>
                              <th>Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Buy order LAL</td>
                              <td>
                                <div className="progress progress-striped progress-xs">
                                  <div
                                    role="progressbar"
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    className="progress-bar progress-bar-success w-100-p"
                                  >
                                    <span className="sr-only">
                                      100% Complete
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <em className="fa fa-calendar fa-fw text-muted" />
                                02/19/2018
                              </td>
                              <td className="text-center">Complete</td>
                            </tr>
                            <tr>
                              <td>Sell order</td>
                              <td>
                                <div className="progress progress-striped progress-xs">
                                  <div
                                    role="progressbar"
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    className="progress-bar progress-bar-danger w-50-p"
                                  >
                                    <span className="sr-only">
                                      50% Complete
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <em className="fa fa-calendar fa-fw text-muted" />
                                02/18/2018
                              </td>
                              <td className="text-center">50% Filled</td>
                            </tr>
                            <tr>
                              <td>Buy order IOTA</td>
                              <td>
                                <div className="progress progress-striped progress-xs">
                                  <div
                                    role="progressbar"
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    className="progress-bar progress-bar-success w-50-p"
                                  >
                                    <span className="sr-only">
                                      50% Complete
                                    </span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <em className="fa fa-calendar fa-fw text-muted" />
                                02/17/2018
                              </td>
                              <td className="text-center">50% Filled</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    data-toggle="dropdown"
                    data-play="bounceIn"
                    className="dropdown-toggle"
                  >
                    <em className="fa fa-user" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Profile</a>
                    </li>
                    <li>
                      <a href="#">Settings</a>
                    </li>
                    <li className="divider" />
                    <li>
                      <a href="#">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <aside className="aside asideBuySell">
            <nav className="sidebar">
              <ul className="nav">
                <li>
                  <div className="item user-block has-submenu">
                    <div className="user-block-picture">
                      <img
                        src="app/img/user/02.jpg"
                        alt="Avatar"
                        width={60}
                        height={60}
                        className="img-thumbnail img-circle account-img-mb"
                      />
                    </div>
                    <div className="user-block-info">
                      <span className="user-block-name item-text">
                        James Franky
                      </span>
                      <span className="user-block-role">
                        <i className="fa fa-check text-green" /> Verified
                      </span>
                      <div className="label label-primary">
                        <i className="fa fa-lock" /> Logout
                      </div>
                    </div>
                  </div>
                </li>
                <li className>
                  <div className="row">
                    <div className="col-md-12">
                      {/* Tabs*/}
                      <div
                        className="bs-example bs-example-tabs"
                        data-example-id="togglable-tabs"
                      >
                        <ul
                          id="myTabs"
                          className="nav nav-tabs nav-tabs-noboder minus-margin-tab"
                          role="tablist"
                        >
                          <li role="presentation" className="active">
                            <a
                              href="#home"
                              className="tab-link-pad"
                              id="home-tab"
                              role="tab"
                              data-toggle="tab"
                              aria-controls="home"
                              aria-expanded="true"
                            >
                              <i className="fa fa-gavel" /> Buy
                            </a>
                          </li>
                          <li role="presentation" className>
                            <a
                              href="#profile"
                              className="tab-link-pad"
                              role="tab"
                              id="profile-tab"
                              data-toggle="tab"
                              aria-controls="profile"
                              aria-expanded="false"
                            >
                              <i className="fa fa-bullhorn" /> Sell
                            </a>
                          </li>
                        </ul>
                        <div
                          id="myTabContent"
                          className="tab-content tab-content-BuySell"
                        >
                          <div
                            role="tabpanel"
                            className="tab-pane fade active in"
                            id="home"
                            aria-labelledby="home-tab"
                          >
                            <div className>
                              <div className="panel-heading"></div>
                              <div className="panel-wrapper collapse in h-auto">
                                <div className="pannel panel-body">
                                  <div className="input-group col-sm-12 m-b">
                                    <span className="input-group-addon btn-primary group-btn-hover darkformfield">
                                      <i className="fa fa-angle-double-up" />{' '}
                                      Max
                                    </span>
                                    <input
                                      type="text"
                                      placeholder={0.0}
                                      className="form-control text-right"
                                    />
                                  </div>
                                  <div className="m-t-9">
                                    <div className="input-group m-b">
                                      <div className="input-group-btn">
                                        <button
                                          type="button"
                                          data-toggle="dropdown"
                                          className="btn btn-primary form-btn-padding dropdown-toggle"
                                        >
                                          Price
                                          <span className="caret" />
                                        </button>
                                        <ul className="dropdown-menu">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Bid
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Ask
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control text-right"
                                        placeholder={0.0}
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="btn-group m-t-9 col-md-12 col-sm-12 col-xs-12">
                                      <button
                                        type="button"
                                        data-toggle="dropdown"
                                        className="btn btn-primary dropdown-toggle btn-block"
                                      >
                                        Limit
                                        <span className="caret" />
                                      </button>
                                      <ul role="menu" className="dropdown-menu">
                                        <li>
                                          <a href="javascript:void(0);">
                                            Limit
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0);">
                                            Conditional
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="btn-group m-t-9 col-md-12 col-sm-12 col-xs-12">
                                      <button
                                        type="button"
                                        data-toggle="dropdown"
                                        className="btn btn-danger dropdown-toggle btn-block"
                                      >
                                        Good 'Till Cancelled
                                        <span className="caret" />
                                      </button>
                                      <ul role="menu" className="dropdown-menu">
                                        <li>
                                          <a href="javascript:void(0);">
                                            Good 'Till Cancelled
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0);">
                                            Immediate or Cancel
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="m-t-9">
                                    <div className="input-group col-sm-12 m-b">
                                      <span className="input-group-addon">
                                        <i className="fa fa-GTC" />
                                      </span>
                                      <input
                                        type="text"
                                        placeholder={0.0}
                                        className="form-control text-right"
                                      />
                                    </div>
                                  </div>
                                  <div className="m-t-9">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-block"
                                    >
                                      <i className="fa fa-plus" /> Buy Siacoin
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            role="tabpanel"
                            className="tab-pane fade"
                            id="profile"
                            aria-labelledby="profile-tab"
                          >
                            <div className>
                              <div className="panel-heading"></div>
                              <div className="panel-wrapper collapse in h-auto">
                                <div className="pannel panel-body">
                                  <div className="input-group col-sm-12 m-b">
                                    <span className="input-group-addon btn-primary group-btn-hover darkformfield">
                                      <i className="fa fa-angle-double-up" />{' '}
                                      Max
                                    </span>
                                    <input
                                      type="text"
                                      placeholder={0.0}
                                      className="form-control text-right"
                                    />
                                  </div>
                                  <div className="m-t-9">
                                    <div className="input-group m-b">
                                      <div className="input-group-btn">
                                        <button
                                          type="button"
                                          data-toggle="dropdown"
                                          className="btn btn-primary form-btn-padding dropdown-toggle"
                                        >
                                          Price
                                          <span className="caret" />
                                        </button>
                                        <ul className="dropdown-menu">
                                          <li>
                                            <a href="javascript:void(0);">
                                              Bid
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript:void(0);">
                                              Ask
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control text-right"
                                        placeholder={0.0}
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="btn-group m-t-9 col-md-12 col-sm-12 col-xs-12">
                                      <button
                                        type="button"
                                        data-toggle="dropdown"
                                        className="btn btn-primary dropdown-toggle btn-block"
                                      >
                                        Limit
                                        <span className="caret" />
                                      </button>
                                      <ul role="menu" className="dropdown-menu">
                                        <li>
                                          <a href="javascript:void(0);">
                                            Limit
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0);">
                                            Conditional
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="btn-group m-t-9 col-md-12 col-sm-12 col-xs-12">
                                      <button
                                        type="button"
                                        data-toggle="dropdown"
                                        className="btn btn-danger dropdown-toggle btn-block"
                                      >
                                        Good 'Till Cancelled
                                        <span className="caret" />
                                      </button>
                                      <ul role="menu" className="dropdown-menu">
                                        <li>
                                          <a href="javascript:void(0);">
                                            Good 'Till Cancelled
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0);">
                                            Immediate or Cancel
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="m-t-9">
                                    <div className="input-group col-sm-12 m-b">
                                      <span className="input-group-addon">
                                        <i className="fa fa-GTC" />
                                      </span>
                                      <input
                                        type="text"
                                        placeholder={0.0}
                                        className="form-control text-right"
                                      />
                                    </div>
                                  </div>
                                  <div className="m-t-9">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-block"
                                    >
                                      <i className="fa fa-minus" /> Sell Siacoin
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </aside>
          <section>
            <section className="main-content">
              <a href="../buy-chip.html">
                <button
                  type="button"
                  className="btn btn-labeled btn-primary pull-right"
                >
                  <span className="btn-label">
                    <i className="fa fa-dollar" />
                  </span>
                  Goto Chips
                </button>
              </a>
              <h3>Dashboard</h3>
              <div className="row">
                <div className="col-md-12">
                  {/* First Row Starts Here */}
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div
                        data-toggle="play-animation"
                        data-play="fadeInDown"
                        data-offset={0}
                        data-delay={100}
                        className="panel widget"
                      >
                        <div className="panel-body bg-primary">
                          <div className="row row-table row-flush">
                            <div className="col-xs-12">
                              <p className="mb0">
                                $759,781,417.92{' '}
                                <em className="fa fa-level-up"></em>
                              </p>
                              <h4 className="m0">Market Cap</h4>
                              <span className="m-t-10">
                                <i className="fa fa-dollar" /> Total Market
                                Capital
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div
                        data-toggle="play-animation"
                        data-play="fadeInDown"
                        data-offset={0}
                        data-delay={500}
                        className="panel widget"
                      >
                        <div className="panel-body bg-warning">
                          <div className="row row-table row-flush">
                            <div className="col-xs-12">
                              <p className="mb0">
                                $1,947,201.24{' '}
                                <em className="fa fa-level-down" />
                              </p>
                              <h4 className="m0">Trade Volume</h4>
                              <span className="f-left m-t-10">
                                <i className="fa fa-dollar" /> 24h Trade Volume
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div
                        data-toggle="play-animation"
                        data-play="fadeInDown"
                        data-offset={0}
                        data-delay={1000}
                        className="panel widget"
                      >
                        <div className="panel-body bg-danger">
                          <div className="row row-table row-flush">
                            <div className="col-xs-12">
                              <p className="mb0">
                                32.4 Billions <em className="fa fa-refresh" />
                              </p>
                              <h4 className="m0">Circ Supply</h4>
                              <span className="m-t-10">
                                <i className="text-c-green f-16 fa fa-refresh" />{' '}
                                Circulating Supply
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                      <div
                        data-toggle="play-animation"
                        data-play="fadeInDown"
                        data-offset={0}
                        data-delay={1500}
                        className="panel widget"
                      >
                        <div className="panel-body bg-success">
                          <div className="row row-table row-flush">
                            <div className="col-xs-12">
                              <p className="mb0">
                                40 Billions <em className="fa fa-money" />
                              </p>
                              <h4 className="m0">Total Supply</h4>
                              <span className="f-left m-t-10">
                                <i className="fa fa-money" /> Total Supply
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* First Row Ends Here */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          All Markets
                          <a
                            href="javascript:void(0);"
                            data-perform="panel-dismiss"
                            data-toggle="tooltip"
                            title
                            className="pull-right"
                            data-original-title="Close Panel"
                          >
                            <em className="fa fa-times" />
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-perform="panel-collapse"
                            data-toggle="tooltip"
                            title
                            className="pull-right"
                            data-original-title="Collapse Panel"
                          >
                            <em className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="panel-wrapper collapse">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              All Markets |<small>All Availble Markets</small>
                            </div>
                            <div className="panel-body">
                              <table
                                id="datatable1"
                                className="table table-striped table-hover"
                              >
                                <thead>
                                  <tr>
                                    <th className="tableSmallPad">Coin</th>
                                    <th className="tableSmallPad">Price</th>
                                    <th className="tableSmallPad">Vol</th>
                                    <th className="tableSmallPad">CHG</th>
                                    <th className="tableSmallPad">Name</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {/* BCH Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      {/*RADIO 1*/}
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="BCH"
                                        id="radio1"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio1"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      BCH
                                    </td>
                                    <td className="tableSmallPad">
                                      0.16000009
                                    </td>
                                    <td className="tableSmallPad">2967.720</td>
                                    <td className="text-c-blue tableSmallPad">
                                      +17.84
                                    </td>
                                    <td className="tableSmallPad">
                                      Bitcoin Cash
                                    </td>
                                  </tr>
                                  {/* BCH Ends Here */}
                                  {/* ETH Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio10"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio10"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      ETH
                                    </td>
                                    <td className="tableSmallPad">
                                      0.10039995
                                    </td>
                                    <td className="tableSmallPad">2887.720</td>
                                    <td className="text-c-blue tableSmallPad">
                                      +1.35
                                    </td>
                                    <td className="tableSmallPad">Ethereum</td>
                                  </tr>
                                  {/* ETH Ends Here */}
                                  {/* XRP Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio3"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio3"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      XRP
                                    </td>
                                    <td className="tableSmallPad">
                                      0.00009485
                                    </td>
                                    <td className="tableSmallPad">1633.576</td>
                                    <td className="text-c-blue tableSmallPad">
                                      +5.10
                                    </td>
                                    <td className="tableSmallPad">Ripple</td>
                                  </tr>
                                  {/* XRP Ends Here */}
                                  {/* STR Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio4"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio4"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      STR
                                    </td>
                                    <td className="tableSmallPad">
                                      0.00004322
                                    </td>
                                    <td className="tableSmallPad">1196.608</td>
                                    <td className="text-c-red tableSmallPad">
                                      -0.05
                                    </td>
                                    <td className="tableSmallPad">Stellar</td>
                                  </tr>
                                  {/* STR Ends Here */}
                                  {/* LTC Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio5"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio5"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      LTC
                                    </td>
                                    <td className="tableSmallPad">
                                      0.01790003
                                    </td>
                                    <td className="tableSmallPad">1115.235</td>
                                    <td className="text-c-blue tableSmallPad">
                                      +1.58
                                    </td>
                                    <td className="tableSmallPad">Litecoin</td>
                                  </tr>
                                  {/* LTC Ends Here */}
                                  {/* SC Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio6"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio6"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      SC
                                    </td>
                                    <td className="tableSmallPad">
                                      0.00000272
                                    </td>
                                    <td className="tableSmallPad">131.014</td>
                                    <td className="text-c-blue tableSmallPad">
                                      +1.87
                                    </td>
                                    <td className="tableSmallPad">Siacoin</td>
                                  </tr>
                                  {/* SC Ends Here */}
                                  {/* Doge Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio7"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio7"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      DOGE
                                    </td>
                                    <td className="tableSmallPad">
                                      0.00000055
                                    </td>
                                    <td className="tableSmallPad">169.631</td>
                                    <td className="text-c-red tableSmallPad">
                                      -1.79
                                    </td>
                                    <td className="tableSmallPad">Dogecoin</td>
                                  </tr>
                                  {/* Doge Ends Here */}
                                  {/* DBG Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio8"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio8"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      DGB
                                    </td>
                                    <td className="tableSmallPad">
                                      0.00000402
                                    </td>
                                    <td className="tableSmallPad">90.224</td>
                                    <td className="text-c-blue tableSmallPad">
                                      +0.00
                                    </td>
                                    <td className="tableSmallPad">DigiByte</td>
                                  </tr>
                                  {/* DGB Ends Here */}
                                  {/* NXT Starts Here */}
                                  <tr
                                    className="clickable-row"
                                    data-href="index.html"
                                  >
                                    <td className="tableSmallPad">
                                      <input
                                        type="radio"
                                        className="radio_item"
                                        defaultValue
                                        name="ETH"
                                        id="radio9"
                                      />
                                      <label
                                        className="label_item"
                                        htmlFor="radio9"
                                      >
                                        {' '}
                                        <i className="fa fa-star text-c-blue" />{' '}
                                      </label>{' '}
                                      NXT
                                    </td>
                                    <td className="tableSmallPad">
                                      0.00002241
                                    </td>
                                    <td className="tableSmallPad">100.305</td>
                                    <td className="text-c-blue tableSmallPad">
                                      +2.56
                                    </td>
                                    <td className="tableSmallPad">NXT</td>
                                  </tr>
                                  {/* NXT Ends Here */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="panel-footer">All Markets</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chart Starts Here */}
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="panel panel-default">
                        <div className="panel-collapse">
                          <div className="panel-body">
                            <h4>Los Angeles Lakers</h4>
                            <div id="candlestickChart" className="h-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Chart Ends Here */}
                  {/* <div class="row">
                  <div class="col-md-6">
                     <div data-toggle="play-animation" data-play="fadeInLeft" data-offset="0" data-delay="1400" class="panel widget">
                        <div class="panel-body">
                           <div class="text-right text-muted">
                              <em class="fa fa-gavel fa-2x text-danger"></em>
                           </div>
                           <h3 class="mt0">Bid Price</h3>
                           <p class="text-danger"><i class="fa fa-money"></i> $0.02</p>
                           <p><i class="fa fa-GTC"></i> 0.00000284</p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div data-toggle="play-animation" data-play="fadeInLeft" data-offset="0" data-delay="1400" class="panel widget">
                        <div class="panel-body">
                           <div class="text-right text-muted">
                              <em class="fa fa-bullhorn fa-2x text-green"></em>
                           </div>
                           <h3 class="mt0">Ask Price</h3>
                           <p class="text-green"><i class="fa fa-money"></i> $0.02</p>
                           <p><i class="fa fa-GTC"></i> 0.00000285</p>
                        </div>
                     </div>
                  </div>
               </div> */}
                </div>
                {/* <div class="col-md-3">
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <div class="panel-title">Coin Status</div>
                  </div>
                  <div class="list-group">
                     <div class="list-group-item">
                        <div class="media">
                           <div class="pull-left">
                              <span class="fa-stack fa-lg">
                              <em class="fa fa-circle fa-stack-2x text-green"></em>
                              <em class="fa fa-level-up fa-stack-1x fa-inverse text-white"></em>
                              </span>
                           </div>
                           <div class="media-body clearfix">
                              <strong>Last Price</strong>
                              <p class="m0">
                                 <small class="text-green">$0.02 <i class="fa fa-money"></i></small>
                              </p>
                              <p><i class="fa fa-GTC"></i> 0.00000286</p>
                           </div>
                        </div>
                     </div>
                     <div class="list-group-item">
                        <div class="media">
                           <div class="pull-left">
                              <span class="fa-stack fa-lg">
                              <em class="fa fa-circle fa-stack-2x text-green"></em>
                              <em class="fa fa-level-up fa-stack-1x fa-inverse text-white"></em>
                              </span>
                           </div>
                           <div class="media-body clearfix">
                              <strong>24Hr Change</strong>
                              <p class="m0">
                                 <small class="text-green">+1.35%</small>
                              </p>
                              <p><i class="fa fa-plus"></i> Gainer <i class="fa fa-level-up text-green"></i></p>
                           </div>
                        </div>
                     </div>
                     <div class="list-group-item">
                        <div class="media">
                           <div class="pull-left">
                              <span class="fa-stack fa-lg">
                              <em class="fa fa-circle fa-stack-2x text-danger"></em>
                              <em class="fa fa-level-down fa-stack-1x fa-inverse text-white"></em>
                              </span>
                           </div>
                           <div class="media-body clearfix">
                              <strong>24Hr Low</strong>
                              <p class="m0">
                                 <small class="text-danger">$0.02</small>
                              </p>
                              <p><i class="fa fa-GTC"></i> 0.00000261 <i class="fa fa-level-down text-danger"></i></p>
                           </div>
                        </div>
                     </div>
                     <div class="list-group-item">
                        <div class="media">
                           <div class="pull-left">
                              <span class="fa-stack fa-lg">
                              <em class="fa fa-circle fa-stack-2x text-green"></em>
                              <em class="fa fa-level-up fa-stack-1x fa-inverse text-white"></em>
                              </span>
                           </div>
                           <div class="media-body clearfix">
                              <strong>24Hr High</strong>
                              <p class="m0">
                                 <small class="text-green">$0.02</small>
                              </p>
                              <p><i class="fa fa-GTC"></i> 0.00000261 <i class="fa fa-level-up text-green"></i></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div class="panel panel-default">
                  <div class="panel-heading">
                     <div class="pull-right"><i class="fa fa-bullhorn"></i></div>
                     <div class="panel-title">Upcoming News</div>
                  </div>
                  <div class="list-group">
                     <a href="#" class="list-group-item">
                        <div class="media">
                           <div class="media-body">
                              <small class="pull-right">2h</small>
                              <strong class="media-heading text-primary">James</strong>
                              <p><small>Posted by James@example</small></p>
                              <p class="mb-sm">
                                 <small>We are adding iota coins read full notice example.com/adding-iota</small>
                              </p>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item">
                        <div class="media">
                           <div class="media-body">
                              <small class="pull-right">2h</small>
                              <strong class="media-heading text-primary">Jimmy</strong>
                              <p><small>Posted by Jimmy@example</small></p>
                              <p class="mb-sm">
                                 <small>We have scheduled update for GTC on 03/04/2018 example.com/GTC-update</small>
                              </p>
                           </div>
                        </div>
                     </a>
                     <a href="#" class="list-group-item">
                        <div class="media">
                           <div class="media-body">
                              <small class="pull-right">2h</small>
                              <strong class="media-heading text-primary">Franky</strong>
                              <p><small>Posted by Franky@example</small></p>
                              <p class="mb-sm">
                                 <small>Vote for your favorite coin to be added example.com/vote-coin</small>
                              </p>
                           </div>
                        </div>
                     </a>
                  </div>
                  <div class="panel-footer clearfix">
                     <a href="#" class="pull-left">
                     <small>Read All</small>
                     </a>
                     <a href="#" class="pull-right">
                     <small>Dismiss All</small>
                     </a>
                  </div>
                  <div class="panel-footer clearfix">
                     <p>Upcoming News</p>
                  </div>
               </div>
            </div> */}
              </div>
              {/* Orders Book */}
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      Orders Book
                      <a
                        href="javascript:void(0);"
                        data-perform="panel-collapse"
                        data-toggle="tooltip"
                        title
                        className="pull-right"
                        data-original-title="Collapse Panel"
                      >
                        <em className="fa fa-minus" />
                      </a>
                    </div>
                    <div className="panel-heading border-none">
                      <div className="pull-right">
                        <label>
                          <select className="form-control input-sm">
                            <option value>Display Row...</option>
                            <option value>10</option>
                            <option value>25</option>
                            <option value>50</option>
                            <option value>100</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="panel-body">
                      <div className="row">
                        <div className="col-md-6 col-sm-12">
                          <div className="table-responsive m-t-10">
                            <table className="table table-striped table-hover table-condensed">
                              <thead>
                                <tr>
                                  <th>
                                    <i className="fa fa-caret-down" />
                                  </th>
                                  <th>Sum</th>
                                  <th>Total</th>
                                  <th>Size</th>
                                  <th>Bid (GTC)</th>
                                  <th>
                                    <i className="fa fa-star" />
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">0.0159</td>
                                  <td className="number">0.0159</td>
                                  <td className="number cursor-pointer">
                                    5680.47083071
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000280
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">0.0685</td>
                                  <td className="number">0.0526</td>
                                  <td className="number cursor-pointer">
                                    18851.91700000
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000279
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">0.7073</td>
                                  <td className="number">0.6388</td>
                                  <td className="number cursor-pointer">
                                    229789.14814763
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000278
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">2.1508</td>
                                  <td className="number">1.4435</td>
                                  <td className="number cursor-pointer">
                                    521105.97581155
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000277
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">5.7000</td>
                                  <td className="number">3.5492</td>
                                  <td className="number cursor-pointer">
                                    1285951.32360851
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000276
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">8.6771</td>
                                  <td className="number">2.9771</td>
                                  <td className="number cursor-pointer">
                                    1082582.56091735
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000275
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">11.6762</td>
                                  <td className="number">2.9991</td>
                                  <td className="number cursor-pointer">
                                    1094562.64213653
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000274
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">20.2601</td>
                                  <td className="number">8.5839</td>
                                  <td className="number cursor-pointer">
                                    3144290.86429987
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000273
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">21.2152</td>
                                  <td className="number">0.9551</td>
                                  <td className="number cursor-pointer">
                                    351142.02305649
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000272
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                                <tr>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                  <td className="number">23.1955</td>
                                  <td className="number">1.9803</td>
                                  <td className="number cursor-pointer">
                                    730741.05599659
                                  </td>
                                  <td className="number cursor-pointer">
                                    0.00000271
                                  </td>
                                  <td className="symbol"></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <table className="w-100-p">
                            <tbody>
                              <tr>
                                <td className="w-50-p">217.564 GTC</td>
                                <td className="w-50-p text-right">
                                  169728986.764 SC
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="float-right">
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="#">First</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="#">Prev</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              {' '}
                              <li className="active">
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li>
                                <a href="#">4</a>
                              </li>
                              <li>
                                <a href="#">5</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="#">Next</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="#">Last</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <div className="table-responsive">
                            <table className="table table-striped table-hover table-condensed">
                              <thead>
                                <tr>
                                  <th>
                                    <i className="fa fa-star" />
                                  </th>
                                  <th>Ask (GTC)</th>
                                  <th>Size (SC)</th>
                                  <th>Total</th>
                                  <th>Sum</th>
                                  <th>
                                    <i className="fa fa-caret-down" />
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000281
                                  </td>
                                  <td className="number cursor-pointer">
                                    360358.10101320
                                  </td>
                                  <td className="number">1.0126</td>
                                  <td className="number">1.0126</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000282
                                  </td>
                                  <td className="number cursor-pointer">
                                    133643.37381191
                                  </td>
                                  <td className="number">0.3769</td>
                                  <td className="number">1.3895</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000283
                                  </td>
                                  <td className="number cursor-pointer">
                                    623151.30997127
                                  </td>
                                  <td className="number">1.7635</td>
                                  <td className="number">3.1530</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000284
                                  </td>
                                  <td className="number cursor-pointer">
                                    464417.50666583
                                  </td>
                                  <td className="number">1.3189</td>
                                  <td className="number">4.4719</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000285
                                  </td>
                                  <td className="number cursor-pointer">
                                    1530110.21227631
                                  </td>
                                  <td className="number">4.3608</td>
                                  <td className="number">8.8328</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000286
                                  </td>
                                  <td className="number cursor-pointer">
                                    646492.28404140
                                  </td>
                                  <td className="number">1.8490</td>
                                  <td className="number">10.6817</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000287
                                  </td>
                                  <td className="number cursor-pointer">
                                    1295584.02927247
                                  </td>
                                  <td className="number">3.7183</td>
                                  <td className="number">14.4001</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000288
                                  </td>
                                  <td className="number cursor-pointer">
                                    461747.75984107
                                  </td>
                                  <td className="number">1.3298</td>
                                  <td className="number">15.7299</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000289
                                  </td>
                                  <td className="number cursor-pointer">
                                    801337.21839318
                                  </td>
                                  <td className="number">2.3159</td>
                                  <td className="number">18.0458</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="symbol"></td>
                                  <td className="number cursor-pointer">
                                    0.00000290
                                  </td>
                                  <td className="number cursor-pointer">
                                    2518143.00186107
                                  </td>
                                  <td className="number">7.3026</td>
                                  <td className="number">25.3484</td>
                                  <td className="p0">
                                    <button
                                      type="button"
                                      className="btn btn-primary btn-xs center-block"
                                    >
                                      <i className="fa fa-caret-down" />
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <table className="w-100-p">
                            <tbody>
                              <tr>
                                <td className="w-50-p">2155.850 GTC</td>
                                <td className="w-50-p text-right">
                                  455229243.263 SC
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="float-right">
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="#">First</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="#">Prev</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="active">
                                <a href="#">1</a>
                              </li>
                              <li>
                                <a href="#">2</a>
                              </li>
                              <li>
                                <a href="#">3</a>
                              </li>
                              <li>
                                <a href="#">4</a>
                              </li>
                              <li>
                                <a href="#">5</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="#">Next</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="#">Last</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Open Orders */}
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      Open Orders
                      <a
                        href="#"
                        data-perform="panel-collapse"
                        data-toggle="tooltip"
                        title="Collapse Panel"
                        className="pull-right"
                      >
                        <em className="fa fa-minus" />
                      </a>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>
                              <i className="fa fa-plus" />
                            </th>
                            <th>Order Date</th>
                            <th>Type</th>
                            <th>Bid/Ask</th>
                            <th>Units Filled SC</th>
                            <th>Units Total SC</th>
                            <th>Actual Rate</th>
                            <th>Estimated Total GTC</th>
                            <th>
                              <i className="fa fa-times" />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <i className="fa fa-minus" />
                            </td>
                            <td>02/18/2018 05:36:12 PM</td>
                            <td>Limit Sell</td>
                            <td>0.00000305</td>
                            <td>0.00000000</td>
                            <td>26089.00161498</td>
                            <td>0.00000000</td>
                            <td>0.07937253</td>
                            <td>
                              <i className="fa fa-times btn btn-danger" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <i className="fa fa-minus" />
                            </td>
                            <td>02/18/2018 05:30:12 PM</td>
                            <td>Limit Buy</td>
                            <td>0.00000300</td>
                            <td>0.00000000</td>
                            <td>27000.00161498</td>
                            <td>0.00000000</td>
                            <td>0.07937253</td>
                            <td>
                              <i className="fa fa-times btn btn-danger" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-lg-2">
                          <div className="input-group">
                            <input
                              type="text"
                              placeholder="Search"
                              className="input-sm form-control"
                            />
                            <span className="input-group-btn">
                              <button
                                type="button"
                                className="btn btn-sm btn-default"
                              >
                                Search
                              </button>
                            </span>
                          </div>
                        </div>
                        <div className="col-lg-8" />
                        <div className="col-lg-2">
                          <div className="input-group pull-right">
                            <select className="input-sm form-control">
                              <option value={0}>Bulk action</option>
                              <option value={1}>Cancel All</option>
                            </select>
                            <span className="input-group-btn">
                              <button className="btn btn-sm btn-default">
                                Apply
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Market History */}
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      Market History
                      <a
                        href="#"
                        data-perform="panel-collapse"
                        data-toggle="tooltip"
                        title="Collapse Panel"
                        className="pull-right"
                      >
                        <em className="fa fa-minus" />
                      </a>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Buy/Sell</th>
                            <th>Bid/Ask</th>
                            <th>Total Units SC</th>
                            <th>Total Cost SC</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>02/18/2018 06:02:45 PM</td>
                            <td className="text-green">
                              Buy <i className="fa fa-arrow-up" />
                            </td>
                            <td>0.00000276</td>
                            <td>1627.72581489</td>
                            <td>0.00449252</td>
                          </tr>
                          <tr>
                            <td>02/18/2018 06:02:45 PM</td>
                            <td className="text-danger">
                              Sell <i className="fa fa-arrow-down" />
                            </td>
                            <td>0.00000276</td>
                            <td>2627.72581489</td>
                            <td>0.00749252</td>
                          </tr>
                          <tr>
                            <td>02/18/2018 06:02:45 PM</td>
                            <td className="text-danger">
                              Sell <i className="fa fa-arrow-down" />
                            </td>
                            <td>0.00000276</td>
                            <td>2627.72581489</td>
                            <td>0.00749252</td>
                          </tr>
                          <tr>
                            <td>02/18/2018 06:02:45 PM</td>
                            <td className="text-danger">
                              Sell <i className="fa fa-arrow-down" />
                            </td>
                            <td>0.00000276</td>
                            <td>2627.72581489</td>
                            <td>0.00749252</td>
                          </tr>
                          <tr>
                            <td>02/18/2018 06:02:45 PM</td>
                            <td className="text-danger">
                              Sell <i className="fa fa-arrow-down" />
                            </td>
                            <td>0.00000276</td>
                            <td>2627.72581489</td>
                            <td>0.00749252</td>
                          </tr>
                          <tr>
                            <td>02/18/2018 06:02:45 PM</td>
                            <td className="text-green">
                              Buy <i className="fa fa-arrow-up" />
                            </td>
                            <td>0.00000276</td>
                            <td>1627.72581489</td>
                            <td>0.00449252</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="float-right">
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="javascript:void(0);">First</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="javascript:void(0);">Prev</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="active">
                                <a href="javascript:void(0);">1</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">2</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">3</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">4</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">5</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="javascript:void(0);">Next</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="javascript:void(0);">Last</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* My Order History */}
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      My Order History
                      <a
                        href="#"
                        data-perform="panel-collapse"
                        data-toggle="tooltip"
                        title="Collapse Panel"
                        className="pull-right"
                      >
                        <em className="fa fa-minus" />
                      </a>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>Closed Date</th>
                            <th>Opened Date</th>
                            <th>Type</th>
                            <th>Bid/Ask</th>
                            <th>Units Filled SC</th>
                            <th>Units Total SC</th>
                            <th>Actual Rate</th>
                            <th>Cost/Proceeds</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01/29/2018 06:29:22 PM</td>
                            <td>01/29/2018 06:27:08 PM</td>
                            <td>Limit Sell</td>
                            <td>0.00000384</td>
                            <td>25953.89501312</td>
                            <td>25953.89501312</td>
                            <td>0.00000383</td>
                            <td>0.09941380</td>
                          </tr>
                          <tr>
                            <td>01/29/2018 06:29:22 PM</td>
                            <td>01/29/2018 06:27:08 PM</td>
                            <td>Limit Sell</td>
                            <td>0.00000384</td>
                            <td>25953.89501312</td>
                            <td>25953.89501312</td>
                            <td>0.00000383</td>
                            <td>0.09941380</td>
                          </tr>
                          <tr>
                            <td>01/29/2018 06:29:22 PM</td>
                            <td>01/29/2018 06:27:08 PM</td>
                            <td>Limit Buy</td>
                            <td>0.00000384</td>
                            <td>25953.89501312</td>
                            <td>25953.89501312</td>
                            <td>0.00000383</td>
                            <td>0.09941380</td>
                          </tr>
                          <tr>
                            <td>01/29/2018 06:29:22 PM</td>
                            <td>01/29/2018 06:27:08 PM</td>
                            <td>Limit Sell</td>
                            <td>0.00000384</td>
                            <td>25953.89501312</td>
                            <td>25953.89501312</td>
                            <td>0.00000383</td>
                            <td>0.09941380</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="panel-footer">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="float-right">
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="javascript:void(0);">First</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="disabled">
                                <a href="javascript:void(0);">Prev</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li className="active">
                                <a href="javascript:void(0);">1</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">2</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">3</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">4</a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">5</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="javascript:void(0);">Next</a>
                              </li>
                            </ul>
                            <ul className="pagination pagination-sm pagi-margin">
                              <li>
                                <a href="javascript:void(0);">Last</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    );
  }
}
