import React from 'react'
// import { Route, Switch } from 'react-router-dom';
import Hospitals from "./Hospitals";
function VacantBeds() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Instant Information</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Hospitals Nearby</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Vacant Beds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Doctors available</a>
                            </li>
                            
                        </ul>
                        <span className="navbar-text">
                            <p>Navbar text with an inlin element</p>
                        </span>
                    </div>
                    
                </div>
            </nav>
            <Hospitals/>
        </div>
    )
}

export default VacantBeds;