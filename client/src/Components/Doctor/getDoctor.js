import React from "react";
import axios from "axios";
import Admin from "../../assets/admin.png";
import {
	Table,
	Nav,
	NavItem,
	NavLink,
	Button,
	Row,
	Col,
	Input,
} from "reactstrap";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
class GetDoctor extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			doctors: [],
			searchTerm: "",
		};
		this.handleDelete = this.handleDelete.bind(this);
	}
	componentDidMount() {
		const headers = {
			authorization: Cookies.get("token"),
		};
		axios
			.get("http://localhost:4000/doctor/doctorList", { headers: headers })
			.then((resp) => {
				console.log("hi");
				console.log(resp);
				this.setState({ doctors: resp.data });
				// console.log(this.state.users);
			});
	}
	handleDelete(id) {
		console.log(id);

		axios
			.delete(`http://localhost:4000/doctor/deleteDoctor/${id}`)
			.then((res) => {
				alert(res.data);
				window.location.reload(false);
			});
	}
	render() {
		return (
			<div>
				{this.props.msg ? (
					<Nav tabs>
						<NavItem>
							<NavLink active>
								<Link to="/patientLogin">Doctor List</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
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
				) : (
					<Nav tabs>
						<NavItem>
							<NavLink>
								<Link to="/adminLogin/addDoctor">
									Add Doctor
								</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink active>
								<Link to="/adminLogin/doctorlist">
									Doctor List
								</Link>
							</NavLink>
						</NavItem>
					</Nav>
				)}
				<Row>
					<Col className="mt-2 mr-5" sm="3">
						{" "}
					</Col>
					<Col className="mt-3">
						<Input
							style={{ width: "50%" }}
							placeholder="Search..."
							type="text"
							onChange={(e) =>
								this.setState({ searchTerm: e.target.value })
							}
						/>
						<section id="doctors" className="doctors"
						>
							<div className="container">
								{typeof this.state.doctors != undefined ? (
									this.state.doctors
										.filter((doctor, index) => {
											if (this.state.searchTerm === "") {
												return doctor;
											} else if (
												doctor.doctor_name.toLowerCase().includes(
													this.state.searchTerm.toLowerCase()
												)
											) {
												return doctor;
											}
											return doctor;
										})
										.map((doctor, index) => {
											return (
												<div className="row">
													<div className="col-lg-6">
														<div className="member d-flex align-items-start">
															<div className="pic"><img src={Admin} className="img-fluid" />
															</div>
															<div className="member-info">
																<h4>{doctor.doctor_name}</h4>
																<span>{doctor.department}</span>
															<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, nam. Possimus tempora impedit eius sequi? Quia at cum magni neque.</p>
															</div>
															
															<div className="social">
															</div>
														</div>
													</div>


													{this.props.msg ? (
														<h1></h1>
													) : (
														<td>
															<Button
																id={doctor.doctor_id}
																color="danger"
																onClick={(e) =>
																	this.handleDelete(
																		e.target
																			.id
																	)
																}
															>
																Delete
															</Button>
														</td>
													)}
												</div>
											);
										})
								) : (
									<h1>ok</h1>
								)}
							</div>
						</section>
					</Col>
				</Row>
			</div >
		);
	}
}

export default GetDoctor;
