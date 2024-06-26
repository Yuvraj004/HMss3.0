import React from "react";
import axios from "axios";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Row, Col, Form } from "reactstrap";
import background from "../../assets/background.svg";
import Header from "../header";
import patient from "../../assets/patient.jpg";
import LogIn from "../loginIn";
import SecNavBar from "./secNavBar";
import LoginNav from "../LoginNav";
import PatientRoutes from "../../Routes/patientRoutes";
import LoginCard from "../LoginCard";
import jwt from "jwt-decode";
import Cookies from "js-cookie";
class PatientLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			role: "patient",
			patient_id: "",
			error: "",

		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	async handleSubmit(childEmail, childPswrd) {		
		await this.setState({ email: childEmail, password: childPswrd });
		axios.post("https://bk-hms.onrender.com/patient/loginpatient", this.state)
		.then((res) => {
			console.log(res.data);
			if (res.data.token) {
				Cookies.set("token", res.data.token);
				Cookies.set("patientName", jwt(res.data.token).name);
				Cookies.set("patient_id", jwt(res.data.token).id);
				Cookies.set("auth", jwt(res.data.token).authorized);
				// Cookies.set("patientEmail", res.data.email);

			} else {
				console.log(res);
				window.alert(res.data.message);
			}
		});
	}
	render() {
		if (Cookies.get("auth")) {
			return (
				<div>
					<SecNavBar
						data="patientData"
						name="patientName"
						link="/patientLogin"
					/>
					<Header msg={Cookies.get("patientName")} />
					<PatientRoutes />
				</div>
			);
		}
		return (
			<div style={{ backgroundImage: `url(${background})` }}>
				<div>
					<Switch>
						<Route exact path="/patientLogin">
							<LoginNav />
							<Row mt="7">
								<LoginCard src={patient} msg="Patient" />
								<Col md="6">
									<Form className="DocForm">
										<LogIn fun={this.handleSubmit} />
									</Form>
								</Col>
							</Row>
						</Route>
						<Route>
							<Redirect to="/patientLogin" />
						</Route>
					</Switch>
				</div>
			</div>
		);
	}
}
export default withRouter(PatientLogin);