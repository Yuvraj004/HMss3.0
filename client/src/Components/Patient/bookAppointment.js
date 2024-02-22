import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
	Button,
	Form,
	FormGroup,
	Input,
	Label,
	NavItem,
	NavLink,
	Nav,
	Row,
	Col,
} from "reactstrap";
import Cookies from "js-cookie";
import Departments from "../Departments";
class BookAppointment extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Name: "",
			Email: "",
			Contact: "",
			Age: "",
			Day: "",
			Speciality: "",
			Description: "",
			Id: "",
			selectedDoctor: "", // Add selectedDoctor state to store the selected doctor's name
		};
		this.inputRef = React.createRef();
	}

	// Function to request the backend to provide the doctor's ID by searching through the name
    getDoctorIdByName = async (doctorName) => {
        try {
            const response = await axios.get(`http://localhost:4000/doctor/getDoctorIdByName/${doctorName}`);
            return response.data.doctorId; // Assuming the backend returns the doctorId
        } catch (error) {
            console.error("Error fetching doctor ID:", error);
            return null;
        }
    };

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);

		// Search for the selected doctor's user ID based on their name
		const selectedDoctorId = this.getDoctorIdByName(this.state.selectedDoctor);
		
		if (!selectedDoctorId) {
            console.error("Failed to get doctor ID");
            return;
        }

		// Prepare data to send to the backend
		const appointmentData = {
			...this.state,
			doctorId: selectedDoctorId, // Add the doctor's user ID to the appointment data
		};

		const headers = {
			authorization: Cookies.get("token"),
		};
		axios
			.post("http://localhost:4000/appointment/appointmentList", appointmentData, {
				headers: headers,
			})
			.then((res) => {
				console.log(res);
				alert(res.data);
			}).catch((error) => {
                console.error("Error making appointment:", error);
                alert("Failed to make appointment. Please try again.");
            });
	}
	// componentDidMount() {
	// 	this.inputRef.current.focus();
	// }
	render() {
		return (
			<>
				<div>
					<Nav tabs>
						<NavItem>
							<NavLink>
								<Link to="/patientLogin">Doctor List</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink active>
								<Link to="/patientLogin/bookAppointment">
									Book Appointment
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/patientLogin/getPatientProfile">
									Edit Profile
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/patientLogin/patientAppointments">
									View Appointments
								</Link>
							</NavLink>
						</NavItem>
					</Nav>
					<section id="appointment" className="appointment section-bg">
						<div className="container">

							<div className="section-title">
								<h2>Make an Appointment</h2>
								<p>Patient</p>
							</div>

							<form role="form" className="php-email-form" onSubmit={this.handleSubmit.bind(this)}>
								<div className="row">
									<div className="col-md-4 form-group">
										<input innerref={this.inputRef} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
											onChange={(e) => {
												this.setState({ Name: e.target.value });
											}} />
										<div className="validate"></div>
									</div>
									<div className="col-md-4 form-group mt-3 mt-md-0">
										<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
											onChange={(e) => {
												this.setState({ Email: e.target.value });
											}} />
										<div className="validate"></div>
									</div>
									<div className="col-md-4 form-group mt-3 mt-md-0">
										<input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={(e) => {
											this.setState({ Contact: e.target.value });
										}} />
										<div className="validate"></div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4 form-group mt-3">
										<input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
											onChange={(e) => {
												this.setState({ Day: e.target.value });
											}} />
										<div className="validate"></div>
									</div>
									<div className="col-md-4 form-group mt-3">
										<select name="department" id="department" className="form-select">
											<option value="">Select Department</option>
											<option value="Department 1">Neurosurgeon</option>
											<option value="Department 2">Department 2</option>
											<option value="Department 3">Department 3</option>
										</select>
										<div className="validate"></div>
									</div>
									<div className="col-md-4 form-group mt-3">
										<select name="doctor" id="doctor" className="form-select"
										value={this.state.selectedDoctor} // Bind the selected doctor's name to the state
										onChange={(e) => {
											this.setState({ selectedDoctor: e.target.value }); // Update the selectedDoctor state
										}}>
											<option value="">Select Doctor</option>
											<option value="Dr. Aarti Sabarwal">Dr. Aarti Sabarwal</option>
											<option value="Dr. Winda Watson">Dr. Winda Watson</option>
											<option value="Dr. Karina Cancer">Dr. Karina Cancer</option>
											<option value="Dr. Suresh">Dr. Suresh</option>
										</select>
										<div className="validate"></div>
									</div>
								</div>

								<div className="form-group mt-3">
									<textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)"></textarea>
									<div className="validate"></div>
								</div>
								<div className="mb-3">
									<div className="loading">Loading</div>
									<div className="error-message"></div>
									<div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
								</div>
								<div className="text-center"><button type="submit">Make an Appointment</button></div>
							</form>

						</div>
					</section>

				</div>
				<Departments />
			</>
		);
	}
}
export default BookAppointment;
