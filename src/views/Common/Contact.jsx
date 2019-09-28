import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <section
          className="home bg-image home-small innerpage contact_us"
          id="home"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="home-wrapper home-intro row pagetitle">
                  <div className="col-xs-12 col-md-8 col-md-offset-2">
                    <h1>Contact Us</h1>
                    <h4 className="normal-font-w">
                      {/*  The SIM allows you to put your love, passion and analytical skills to the test by trading Goodrich Team Chips (GTC) based on sports performance. */}
                      Contact us to discuss products, partnership, media
                      relations and support.
                      <br />
                      Need an immediate answer? Have you checked the{" "}
                      <a href="#">Knowledge Hub?</a>
                      <br />
                      Or directly <a href="#">email us</a>.
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
        <section
          className="two-column bg-white"
          style={{ paddingTop: 0, paddingBottom: 30 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-1 col-md-2 col-lg-3" />
              <div
                className="col-sm-12 col-md-4 col-lg-3"
                data-aos="fade-right"
              >
                <h3 className="exo2-bold" style={{ marginBottom: 20 }}>
                  America
                </h3>
                <p>
                  Address : 4500 Great America Pkwy <br />
                  Santa Clara, CA 95054
                </p>
                <p>
                  E-mail: sanfrancisco@god.rich <br />
                  Phone: +1 650 963 6724
                </p>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-3" data-aos="fade-left">
                <h3 className="exo2-bold" style={{ marginBottom: 20 }}>
                  Singapore
                </h3>
                <p>
                  Address : 51 Goldhill Plaza <br />
                  Singapore 308900
                </p>
                <p>
                  E-mail: singapore@god.rich <br />
                  Phone: +65 9138 5201
                </p>
              </div>
              <div className="col-sm-1 col-md-1 col-lg-1 col-lg-1" />
            </div>
          </div>
        </section>
        <section className="map-kontakt bg-white">
          <div>
            <div className="row" data-aos="zoom-out">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9700.925799701743!2d76.72473498890984!3d30.724157158115904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1567502828783!5m2!1sen!2sin"
                width="100%"
                height={350}
                frameBorder={0}
                style={{ border: "1px solid #dddddd", background: "#f6f6f6" }}
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
