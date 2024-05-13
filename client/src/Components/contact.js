import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact" >
        <div className="container" style={{ marginBlock: 40 }}></div>

        <div>
          {/* <iframe width="600" height="450" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Delhi+(Hospitals)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
          <a href='https://www.easybooking.eu/'>Hotelsoftware kleine Hotels</a>
        </div>

        <div className="container flex" style={{ flexDirection: "row" }}>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div
                className="info"
                style={{
                  textAlign: "start",
                  float: "left",
                  flex: "start",
                  marginRight: "90px",
                  padding: "0",
                }}
              >
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Guru Gobind Singh Indraprastha University, New Delhi</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>yuvrajchat@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9999569456</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    autoComplete="true"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                {/* <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div> */}
                <div className="primary-button">
                  <button
                    type="submit"
                    className="btn-contact"
                    style={{
                      color: "white",
                      backgroundColor: "darkblue",
                      fontSize: "15px",
                      fontWeight: "bolder",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
