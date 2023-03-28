import { Route } from "react-router";
import { Col, Row } from "reactstrap";
import AdminWelcome from "../Components/Admin/admin-welcome";
import DoctorLogin from "../Components/Doctor/doctorLogin";
import LoginCard from "../Components/LoginCard";
import LoginNav from "../Components/LoginNav";
import PatientLogin from "../Components/Patient/loginPatient";
import doctor_login from "../assets/doctor_2.jpg";
import SignUp from "../Components/Patient/signUp";
import VacantBeds from "../Components/Hospitals/VacantBeds";
import Hospitals from "../Components/Hospitals/Hospitals";
import Payment from "../Components/paymentgateway";
export default function EntryRoutes() {
	return (
		<>
			<Route path="/adminLogin">
				<AdminWelcome />
			</Route>
			<Route path="/doctorLogin" >
				<DoctorLogin role={"doctor"} />
			</Route>
			<Route path="/patientLogin">
				<PatientLogin />
			</Route>
			<Route path="/signUp">
				<LoginNav msg="signup" />
				<Row mt="7">
					<LoginCard
						src={doctor_login}
						msg="Welcome to Global Hospitals"
					/>
					<Col>
						<h1>Sign Up</h1>
						<SignUp />
					</Col>
				</Row>
			</Route>
			<Route path="/vacantBeds">
				<VacantBeds/>
			</Route>
			<Route path="/hospitals">
				<Hospitals/>
			</Route>
			<Route path="/payment">
				<Payment/>
			</Route>
		</>
	);
}
