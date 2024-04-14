import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <section id="contact" className="contact" >
        <div className="container" style={{ marginBlock: 40 }}></div>

        <div>
          <iframe
            style={{ border: "0", width: "100%", height: "350px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1600870883726!2d77.0171102150817!3d28.594973882432694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1aafdb891567%3A0x10d270731c930a87!2sGuru%20Gobind%20Singh%20Indraprastha%20University!5e0!3m2!1sen!2sin!4v1680007417655!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            frameBorder="0"
          ></iframe>
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
