import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Cookies from "js-cookie";
import PatientNav from "../patientNav";

const BookAppointment = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [day, setDay] = useState("");
	const [department, setDepartment] = useState("");
	const [description, setDescription] = useState("");
	const [selectedDoctor, setSelectedDoctor] = useState(""); // Add state for selected doctor
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [appointmentId,setAptId] = useState(0);
	const [doctorId,setDoctorId] = useState(0);
	const [isAdding, setIsAdding] = useState(false);


	const getDoctorIdByName = async (doctorName) => {
	try {
		const response = await axios.get(`http://localhost:4000/doctor/getDoctorIdByName/${doctorName}`);
		return response.data.doctorId;
	} catch (error) {
		console.error("Error fetching doctor ID:", error);
		return null;
	}
	};
	const AddAppointmentToDoctor =async () => {
		
		setIsAdding(true);
		setErrorMessage(null);
		try {
		const response = await axios.post('http://localhost:4000/doctor/aptUpdate', {
			doctorId,
			appointmentId,
		});

		console.log(response.data); // "Appointment added to doctor's profile successfully"
		setIsAdding(false);
		} catch (error) {
		console.error("Error adding appointment to doctor:", error);
		setIsAdding(false);
		setErrorMessage(error.message || "An error occurred while adding the appointment.");
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setErrorMessage("");
		setSuccessMessage("");

		const selectedDoctorId = await getDoctorIdByName(selectedDoctor);
		setDoctorId(selectedDoctorId);
		if (!selectedDoctorId) {
			setErrorMessage("Failed to get doctor ID");
			setIsLoading(false);
			return;
		}

		const appointmentData = {
			name,
			email,
			contact,
			day,
			description,
			department,
			doctorId: selectedDoctorId,
		};

		const headers = {
			authorization: Cookies.get("token"),
		};

		try {
			const response = await axios.post("http://localhost:4000/appointment/createAppointment", {
			headers,
			data: appointmentData,
			});
			const appointmentId = response.data.appointmentId;
			setAptId(appointmentId);
			setSuccessMessage("Your appointment request has been sent successfully. Thank you!");
			AddAppointmentToDoctor();
		} catch (error) {
			console.error("Error creating appointment:", error);
			setErrorMessage("Failed to make appointment. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};
	
	return (
		<>
			<div>
				<PatientNav/>
				<section id="appointment" className="appointment section-bg">
					<div className="container">

						<div className="section-title">
							<h2>Make an Appointment</h2>
						</div>

						<form role="form" className="php-email-form" onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-md-4 form-group">
									<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
										onChange={(e) => {
											setName({ Name: e.target.value });
										}} />
									<div className="validate"></div>
								</div>
								<div className="col-md-4 form-group mt-3 mt-md-0">
									<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
										onChange={(e) => {
											setEmail({ Email: e.target.value });
										}} />
									<div className="validate"></div>
								</div>
								<div className="col-md-4 form-group mt-3 mt-md-0">
									<input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={(e) => {
										setContact({ Contact: e.target.value });
									}} />
									<div className="validate"></div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4 form-group mt-3">
									<input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
										onChange={(e) => {
											setDay({ Day: e.target.value });
										}} />
									<div className="validate"></div>
								</div>
								<div className="col-md-4 form-group mt-3">
									<select name="department" id="department" className="form-select"
									value={department} onChange={(e) =>{
										setDepartment(e.target.value);
									}}>
										<option value="">Select Department</option>
										<option value="Neuro">Neurosurgeon</option>
										<option value="Cardio">Cardiology</option>
										<option value="Radio">Radiology</option>
									</select>
									<div className="validate"></div>
								</div>
								<div className="col-md-4 form-group mt-3">
									<select name="doctor" id="doctor" className="form-select"
									value={selectedDoctor} // Bind the selected doctor's name to the state
									onChange={(e) => {
										setSelectedDoctor(e.target.value ); // Update the selectedDoctor state
									}}>
										<option value="">Select Doctor</option>
										<option value="Dr. Aarti Sabarwal">Dr. Aarti Sabarwal</option>
										<option value="Dr. Winda Watson">Dr. Winda Watson</option>
										<option value="Dr. Karina Cancer">Dr. Karina Cancer</option>
										<option value="Dr. suresh">Dr. Suresh</option>
									</select>
									<div className="validate"></div>
								</div>
							</div>

							<div className="form-group mt-3">
								<textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)" onChange={(e)=>{setDescription({description:e.target.value})}}></textarea>
								<div className="validate"></div>
							</div>
							<div className="mb-3">
                				{isLoading && <div className="loading">Loading</div>}
                				{errorMessage && <div className="error-message">{errorMessage}</div>}
                				{successMessage && <div className="sent-message">{successMessage}</div>}
              				</div>
							<div className="text-center"><button type="submit" >Make an Appointment</button></div>
						</form>

					</div>
				</section>

			</div>
			{/* <Departments /> */}
		</>
	);
}
export default BookAppointment;
