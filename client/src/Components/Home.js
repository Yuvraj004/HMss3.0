import React from "react";
import { Switch, Link } from "react-router-dom";
import Well from "../assets/Well.png";
import firstSlide from "../assets/firstSlide.png";
import Departments from "./Departments";
import Contact from "./contact";
import abtuss from "../assets/aboutUs.jpg";
import abtus1 from "../assets/aboutUs1.jpg";
import abtus2 from "../assets/aboutUs2.jpg";
import abtus3 from "../assets/aboutUs3.jpg";
import secondSlide from "../assets/secondSlide.png";
import thirdSlide from "../assets/third slide.png";
function Home() {
  return (
    <>
      <div>
        <nav
          className="flex "
          style={{
            margin: 10,
            justifyContent: "right",
            maxWidth: "100%",
            borderColor: "transparent",
          }}
        >
          <section className="nav flex leftnav" style={{ margin: 10 }}>
            <img
              src={Well}
              alt="logo"
              style={{backgroundColor:"transparent", position: "absolute", width: 150, left: 70 }}
            />
          </section>

          <section
            className="nav closesmall"
            style={{ marginTop: 10, marginLeft: 50 }}
          >
            <section
              className="nav"
              style={{
                marginTop: 10,
                marginLeft: 50,
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
            >
              <ul className="flex" style={{ height: "3rem" }}>
                <li>
                  <a className="NavBtn"  href="#">home</a>
                </li>
                <li>
                  <a  className="NavBtn" href="#abt">about</a>
                </li>
                <li>
                  <a className="NavBtn" href="/payment">Medicines</a>
                </li>
                <li>
                  <a className="NavBtn" href="/signUp">signup</a>
                </li>
                <div className="dropdown ">
                  <button
                    className="dropdown-toggle NavBtn"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      border: "none",
                      backgroundColor: "#FFF",
                      fontSize: "30px",
                      fontWeight: "bolder",
                    }}
                  >
                    Login
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/patientLogin">
                        For Patients
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/doctorLogin">
                        For Doctors
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/adminLogin">
                        For Admin
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </section>
          </section>
          <div className="Navbar dropdown ">
            <a
              className="dropdown-toggle NavBtn"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Accessories
            </a>
            <ul
              className="dropdown-menu"
              style={{ height: "3rem", backgroundColor: "white" }}
            >
              <li>
                <a className="dropdown-item NavBtn" href="#">
                  home
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item NavBtn "
                  style={{ backgroundColor: "white" }}
                  href="#abt"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item NavBtn"
                  style={{ backgroundColor: "white" }}
                  href="/payment"
                >
                  Medicines
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item NavBtn"
                  style={{ backgroundColor: "white" }}
                  href="/signUp"
                >
                  signup
                </a>
              </li>
            </ul>
          </div>
          <div className="Navbar dropdown">
            <button
              className="dropdown-toggle NavBtn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                border: "none",
                backgroundColor: "#FFF",
                fontSize: "30px",
                fontWeight: "bolder",
              }}
            >
              Login
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item NavBtn"
                  style={{ backgroundColor: "white" }}
                  href="/patientLogin"
                >
                  For Patients
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item NavBtn"
                  style={{ backgroundColor: "white" }}
                  href="/doctorLogin"
                >
                  For Doctors
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item NavBtn"
                  style={{ backgroundColor: "white" }}
                  href="/adminLogin"
                >
                  For Admin
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="homeSectionsDiv" >
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide caaro"
          data-bs-ride="carousel"
          
        >
          <div className="carousel-inner" style={{ color: "black" }}>
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src={firstSlide}
                style={{ height: "80vh" }}
                alt="doctor photo"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={secondSlide}
                style={{ height: "80vh" }}
                alt="doctor photo"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={thirdSlide}
                style={{ height: "80vh" }}
                alt="doctor photo"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
            style={{ color: "black" }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden" style={{color:"blue",fontWeight:"bolder"}}>P</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
            style={{ color: "black" }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden" style={{color:"blue",fontWeight:"bolder"}}>N</span>
          </button>
        </div>
        <main id="abt" className="aboutsection">
          <h2 className="ph">about us</h2>
          <div className="abouttext container">
            <p>
              We are a leading healthcare facility dedicated to providing
              exceptional medical care and services to our patients. Our
              hospital has a team of highly skilled and experienced medical
              professionals, including doctors, nurses, and support staff, who
              are committed to delivering the highest standard of care. <br />
              <img className="imgMod" src={abtuss}></img>
              At our hospital, we believe in putting our patients first. We
              understand that each patient is unique, and we strive to provide
              personalized care that meets their individual needs. Our
              state-of-the-art facilities and advanced medical technologies
              enable us to diagnose and treat a wide range of medical conditions
              with precision and accuracy. <br />
              We offer a comprehensive range of medical services, including
              general medicine, surgery, pediatrics, obstetrics and gynecology,
              cardiology, oncology, neurology, and more. Our hospital also has
              specialized clinics and departments for various medical
              specialties, including diabetes management, respiratory care, and
              physical therapy. <br />
              <img className="imgMod" src={abtus1}></img>
              <img className="imgMod" src={abtus3}></img>
              In addition to medical services, our hospital also offers a range
              of support services, including counseling and mental health
              services, nutrition counseling, and rehabilitation services. We
              believe in treating the whole person, not just their medical
              condition, and our support services are designed to help our
              patients achieve optimal health and wellness. <br />
              We are committed to providing a safe and comfortable environment
              for our patients and their families. Our hospital has strict
              safety protocols in place to prevent the spread of infections and
              ensure that our patients receive the best possible care. We also
              have comfortable patient rooms, modern waiting areas, and ample
              parking facilities to make our patients' visits as stress-free as
              possible. <br />
              Thank you for choosing our hospital for your healthcare needs. We
              look forward to serving you and your family and helping you
              achieve optimal health and wellness. <br />
            </p>
            <div>
              <img className="imgMod" src={abtus2}></img>
            </div>
          </div>
        </main>
      </div>
      <Departments />
      <Contact />
    </>
  );
}

export default Home;
