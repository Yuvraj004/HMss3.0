import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, Table } from "reactstrap";
import Cookies from "js-cookie";
import PatientNav from "../patientNav";
class PatientAppointments extends Component {
	constructor(props) {
		super(props);
		this.state = {
			appointments: [],
		};
	}
	async componentDidMount() {
		const headers = {
			authorization: Cookies.get("token"),
		};
		const id=Cookies.get("doctor_id")
		await axios
			.get(
				`http://localhost:4000/appointment/appointmentList/${id}`,
				{
					Email: Cookies.get("patientEmail"),
				},
				{ headers: headers }
			)
			.then((res) => {
				console.log(res);
				this.setState({ appointments: res.data });
			});
		console.log(this.state);
	}
	render() {
		return (
			<div>
				<PatientNav/>
				<Table>
					<thead>
						<th>Application Id</th>
						<th>Name</th>
						<th>Email</th>
						<th>Prescription</th>
					</thead>
					<tbody>
						{this.state.appointments.map((appointment) => {
							return (
								<tr>
									<td>{appointment.Apid}</td>
									<td>{appointment.Name}</td>
									<td>{appointment.Email}</td>
									<td>{appointment.Prescription}</td>
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default PatientAppointments;
