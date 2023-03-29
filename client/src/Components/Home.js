import React from 'react';
import { Switch, Link } from 'react-router-dom';
import PureBody from './PureBody';
import admin from "../assets/admin.png";
import doctor from "../assets/doctor_new.png";
import patient from "../assets/patient.jpg";
import UserSolid from "../assets/user-solid.svg";
import Reactangle1 from "../assets/Rectangle 10 (1).png";
import Reactangle from "../assets/Rectangle 10.png";
import Reactangle2 from "../assets/images.jpg";
import Well from "../assets/Well.png";
import firstSlide from '../assets/firstSlide.png';
import Departments from './Departments';
import Contact from "./contact";

import secondSlide from '../assets/secondSlide.png';
import thirdSlide from '../assets/third slide.png';

// import Footer from "./Components/footer";
function Home() {
    return (
        <>
            <div >
                <nav className="flex container " style={{ margin: 10, justifyContent: 'right', maxWidth: '100%', backgroundColor: 'transparent', borderColor: 'transparent' }}>
                    <section className="nav flex leftnav" style={{ margin: 10 }} >
                        <img src={Well} alt="logo" style={{ position: 'absolute', width: 150, left: 70 }} />
                    </section>

                    <section className="nav" style={{ marginTop: 10, marginLeft: 50 }}>
                        <section className="nav" style={{ marginTop: 10, marginLeft: 50, backgroundColor: 'transparent', borderColor: 'transparent' }}>
                            <ul className="flex" style={{ height: '3rem' }}>
                                <li><a href="#">home</a></li>
                                <li><a href="#abt">about</a></li>
                                <li><a href="/payment">Medicines</a></li>
                                <li><a href="#">services</a></li>
                                <div class="dropdown" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <p className=' login-dropdown' style={{ marginTop: 20, fontSize: 23 }} > Login</p>
                                    <div class="dropdown-content">
                                        <a href="/patientLogin">For Patients</a>
                                        <a href="/doctorLogin">For Doctors</a>
                                        <a href="/adminLogin">For Admin</a>
                                    </div>
                                </div>
                                <li>
                                    <a href="signUp.html">signup</a>
                                </li>
                            </ul>
                        </section>
                    </section>
                </nav>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" style={{ color: "black" }}>
                        <div className="carousel-item active">
                            <img className='d-block w-100' src={firstSlide} style={{ height: '80vh' }} alt="doctor photo" />
                            <div className="carousel-caption d-none d-md-block" style={{ display: "flex", flexDirection: 'column', color: "black" }}>
                                <Link to="/patientLogin" style={{align:'left'}}>
                                    <button className="primary-button btn-front">login</button>
                                </Link>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className='d-block w-100' src={secondSlide} style={{ height: '80vh' }} alt="doctor photo" />
                        </div>
                        <div className="carousel-item">
                            <img className='d-block w-100' src={thirdSlide} style={{ height: '80vh' }} alt="doctor photo" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" style={{ color: "black" }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" style={{ color: "black" }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <hr className='hor' />
                <main id="abt" className="aboutsection">

                    <div className="about container" style={{display: "block"}}>
                        <h2>about us</h2>
                    </div>

                    <div className="abouttext container" style={{textAlign: 'left', display: "block"}}>
                        <span className="ph">Welcome to our hospital website! </span>
                        <p>    

                            We are a leading healthcare facility dedicated to providing exceptional medical care and services to our patients. Our hospital has a team of highly skilled and experienced medical professionals, including doctors, nurses, and support staff, who are committed to delivering the highest standard of care. <br />

                            At our hospital, we believe in putting our patients first. We understand that each patient is unique, and we strive to provide personalized care that meets their individual needs. Our state-of-the-art facilities and advanced medical technologies enable us to diagnose and treat a wide range of medical conditions with precision and accuracy. <br />

                            We offer a comprehensive range of medical services, including general medicine, surgery, pediatrics, obstetrics and gynecology, cardiology, oncology, neurology, and more. Our hospital also has specialized clinics and departments for various medical specialties, including diabetes management, respiratory care, and physical therapy. <br />

                            In addition to medical services, our hospital also offers a range of support services, including counseling and mental health services, nutrition counseling, and rehabilitation services. We believe in treating the whole person, not just their medical condition, and our support services are designed to help our patients achieve optimal health and wellness. <br />

                            We are committed to providing a safe and comfortable environment for our patients and their families. Our hospital has strict safety protocols in place to prevent the spread of infections and ensure that our patients receive the best possible care. We also have comfortable patient rooms, modern waiting areas, and ample parking facilities to make our patients' visits as stress-free as possible. <br />

                            Thank you for choosing our hospital for your healthcare needs. We look forward to serving you and your family and helping you achieve optimal health and wellness. <br />
                        </p>
                    </div>

                </main>
                <hr className='hor2' />

            </div>
            <Departments />
            <Contact/>
        </>
    )
}

export default Home;