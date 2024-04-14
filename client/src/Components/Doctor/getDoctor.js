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
					<Nav tabs className="nav-tabs">
						<NavItem>
							<NavLink active id="bw1">
								<Link to="/patientLogin">Doctor List</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink id="bw2">
								<Link to="/patientLogin/bookAppointment">
									Book Appointment
								</Link>
							</NavLink>
						</NavItem >
						<NavItem>
							<NavLink id="bw3" to="/patientLogin/getPatientProfile">
								{/* <Link to="/patientLogin/getPatientProfile"> */}
									Edit Profile
								{/* </Link> */}
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink id="bw4">
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
					<Col className="mt-3">
						<Input
							style={{ display:"flex",width: "50%",position: "relative", left: "25rem" }}
							placeholder="Search..."
							type="text"
							onChange={(e) =>
								this.setState({ searchTerm: e.target.value })
							}
						/>
						<section id="doctors" className="doctors"
						>
							<div className="container" style={{marginLeft:"70px"}}>
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
												<div className="row" key={doctor._id}>
													<div className="col-lg-8">
														<div className="member d-flex align-items-start">
															<div className="pic"><img src={Admin} className="img-fluid" />
															</div>
															<div className="member-info">
																<h4>{doctor.doctor_name}</h4>
																<span>{doctor.department}</span>
															<p style={{fontSize:"14px"}}>Work Experience: 10 years</p>
															<p><i className="fas fa-stars fa-3x "></i></p>
															</div>
														</div>
													</div>


													{this.props.msg ? (
														<h1></h1>
													) : (
														<div>
															<Button
																id={doctor._id}
																color="danger"
																onClick={(e) =>
																	this.handleDelete(
																		e.target
																			.id
																	)
																}
															>Delete
															</Button>
														</div>
													)}
												</div>
											);
										})
								) : (
									<h1>Loading...!</h1>
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
