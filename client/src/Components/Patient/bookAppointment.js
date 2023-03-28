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
		};
		this.inputRef = React.createRef();
	}
	handleSubmit(e) {
		console.log(this.state);
		const headers = {
			authorization: Cookies.get("token"),
		};
		axios
			.post("http://localhost:4000/appointment/appointmentList", this.state, {
				headers: headers,
			})
			.then((res) => {
				console.log(res);
				alert(res.data);
			});
	}
	// componentDidMount() {
	// 	this.inputRef.current.focus();
	// }
	render() {
		return (
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
				<Row>
					{/* <Col md="3"></Col>
					<Col md="6">
						<Form className="mt-3">
							<FormGroup>
								<Label>Name *</Label>
								<Input
									innerRef={this.inputRef}
									type="text"
									value={sessionStorage.getItem(
										"patientName"
									)}
									onChange={(e) => {
										this.setState({ Name: e.target.value });
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Email</Label>
								<Input
									type="email"
									value={sessionStorage.getItem(
										"patientEmail"
									)}
									onChange={(e) => {
										this.setState({
											Email: e.target.value,
										});
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Contact</Label>
								<Input
									type="text"
									value={sessionStorage.getItem(
										"patientContact"
									)}
									onChange={(e) => {
										this.setState({
											Contact: e.target.value,
										});
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Age *</Label>
								<Input
									type="number"
									onChange={(e) => {
										this.setState({ Age: e.target.value });
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Day</Label>
								<Input
									type="date"
									onChange={(e) => {
										this.setState({ Day: e.target.value });
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Speciality</Label>
								<Input
									type="text"
									onChange={(e) => {
										this.setState({
											Speciality: e.target.value,
										});
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Description</Label>
								<Input
									type="text"
									onChange={(e) => {
										this.setState({
											Description: e.target.value,
										});
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Label>Doctor Id *</Label>
								<Input
									type="number"
									onChange={(e) => {
										this.setState({ Id: e.target.value });
									}}
								/>
							</FormGroup>
							<FormGroup>
								<Button
									color="primary"
									onClick={() => this.handleSubmit()}
								>
									Submit
								</Button>
							</FormGroup>
						</Form>
					</Col> */}
				</Row>
				<section id="appointment" className="appointment section-bg">
					<div className="container">

						<div className="section-title">
							<h2>Make an Appointment</h2>
							<p>fjkhj</p>
						</div>

						<form action="forms/appointment.php" method="post" role="form" className="php-email-form">
							<div className="row">
								<div className="col-md-4 form-group">
									<input innerRef={this.inputRef} type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
									onChange={(e) => {
										this.setState({ Name: e.target.value });
									}}/>
										<div className="validate"></div>
								</div>
								<div className="col-md-4 form-group mt-3 mt-md-0">
									<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
									onChange={(e) => {
										this.setState({ Email: e.target.value });
									}}/>
										<div className="validate"></div>
								</div>
								<div className="col-md-4 form-group mt-3 mt-md-0">
									<input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={(e) => {
										this.setState({ Contact: e.target.value });
									}}/>
										<div className="validate"></div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4 form-group mt-3">
									<input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
									onChange={(e) => {
										this.setState({ Day: e.target.value });
									}}/>
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
									<select name="doctor" id="doctor" className="form-select">
										<option value="">Select Doctor</option>
										<option value="Doctor 1">Doctor 1</option>
										<option value="Doctor 2">Doctor 2</option>
										<option value="Doctor 3">Doctor 3</option>
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
				<section id="departments" className="departments">
					<div className="container">

						<div className="section-title">
							<h2>Departments</h2>
							<p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
						</div>

						<div className="row gy-4">
							<div className="col-lg-3">
								<ul className="nav nav-tabs flex-column">
									<li className="nav-item">
										<a className="nav-link active show" data-bs-toggle="tab" href="#">Cardiology</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-bs-toggle="tab" href="#">Neurology</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-bs-toggle="tab" href="#">Hepatology</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-bs-toggle="tab" href="#">Pediatrics</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" data-bs-toggle="tab" href="#">Eye Care</a>
									</li>
								</ul>
							</div>
							<div className="col-lg-9">
								<div className="tab-content">
									<div className="tab-pane active show" id="tab-1">
										<div className="row gy-4">
											<div className="col-lg-8 details order-2 order-lg-1">
												<h3>Cardiology</h3>
												<p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
												<p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
											</div>
											<div className="col-lg-4 text-center order-1 order-lg-2">
												<img src="assets/img/departments-1.jpg" alt="" className="img-fluid"/>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="tab-2">
										<div className="row gy-4">
											<div className="col-lg-8 details order-2 order-lg-1">
												<h3>Et blanditiis nemo veritatis excepturi</h3>
												<p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
												<p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
											</div>
											<div className="col-lg-4 text-center order-1 order-lg-2">
												<img src="assets/img/departments-2.jpg" alt="" className="img-fluid"/>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="tab-3">
										<div className="row gy-4">
											<div className="col-lg-8 details order-2 order-lg-1">
												<h3>Impedit facilis occaecati odio neque aperiam sit</h3>
												<p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
												<p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
											</div>
											<div className="col-lg-4 text-center order-1 order-lg-2">
												<img src="assets/img/departments-3.jpg" alt="" className="img-fluid"/>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="tab-4">
										<div className="row gy-4">
											<div className="col-lg-8 details order-2 order-lg-1">
												<h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
												<p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
												<p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
											</div>
											<div className="col-lg-4 text-center order-1 order-lg-2">
												<img src="assets/img/departments-4.jpg" alt="" className="img-fluid"/>
											</div>
										</div>
									</div>
									<div className="tab-pane" id="tab-5">
										<div className="row gy-4">
											<div className="col-lg-8 details order-2 order-lg-1">
												<h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
												<p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
												<p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
											</div>
											<div className="col-lg-4 text-center order-1 order-lg-2">
												<img src="assets/img/departments-5.jpg" alt="" className="img-fluid"/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>
			</div>
		);
	}
}
export default BookAppointment;
