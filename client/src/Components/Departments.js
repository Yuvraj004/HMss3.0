import React from 'react'
import Cardio from '../assets/cardiology.jpg'
import Neuro from '../assets/departments-2.jpg';
import Hepto from "../assets/departments-3.webp" ;
import Pedia from "../assets/departments-4.webp";
import Eye from "../assets/departments-5.jpg" ;
function Departments() {
    return (
        <div style={{width:"fit-content"}}>
            <section id="departments" className="departments">
                <div className="dcontainer" style={{padding:"20px"}}>

                    <div className="section-title" style={{marginBlock:30}}>
                        <h2 style={{marginBlock:20}}>Departments</h2>
                    </div>

                    <div className="row gy-1">
                        <div className="col-lg-3" style={{color:"black"}}>
                            <ul className="nav flex-column" style={{fontSize:"20px"}}>
                                <li className="nav-item">
                                    <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1" style={{color:"black"}}>Cardiology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2" style={{color:"black"}}>Neurology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3" style={{color:"black"}}>Hepatology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4" style={{color:"black"}}>Pediatrics</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5" style={{color:"black"}}>Eye Care</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-8">
                            <div className="tab-content">
                                <div className="tab-pane active show" id="tab-1">
                                    <div className="row gy-1">
                                        <div className="col-lg-8 details order-2 order-lg-1" style={{textAlign:"center"}}>
                                            <h3 style={{marginBlock:20}}>Cardiology</h3>
                                            
                                            <p style={{marginBlock:20}}>Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology.</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Cardio} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-2">
                                    <div className="row gy-1">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3 style={{marginBlock:20}}>Neurology</h3>
 
                                            <p>Neurology, medical specialty concerned with the nervous system and its functional or organic disorders. Neurologists diagnose and treat diseases and disorders of the brain, spinal cord, and nerves.</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Neuro} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-3">
                                    <div className="row gy-1">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3 style={{marginBlock:20}}>Hepatology</h3>

                                            <p> is a branch of medicine concerned with the study, prevention, diagnosis, and management of diseases that affect the liver, gallbladder, biliary tree, and pancreas. The term hepatology is derived from the Greek words “hepatikos” and “logia,” which mean liver and study, respectively.</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Hepto} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-4">
                                    <div className="row gy-1">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3 style={{marginBlock:20}}>Pediatrics</h3>

                                            <p>is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18.</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Pedia}alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab-5">
                                    <div className="row gy-1">
                                        <div className="col-lg-8 details order-2 order-lg-1">
                                            <h3 style={{marginBlock:20}}>Eye Care</h3>
                                            <p>Everyone needs to have their eyesight tested to check for vision and eye problems. Children usually have vision screening in school or at their health care provider's office during a checkup. Adults may also get vision screenings during their checkups. But many adults need more than a vision screening. They need a comprehensive dilated eye exam.</p>
                                        </div>
                                        <div className="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={Eye} alt="" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Departments