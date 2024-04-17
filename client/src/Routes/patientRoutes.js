import { Route, Switch } from "react-router";
import PatientLogin from "../Components/Patient/loginPatient";
import BookAppointment from "../Components/Patient/bookAppointment";
import GetPatientProfile from "../Components/Patient/getPatientProfile";
import PatientAppointments from "../Components/Patient/patientAppointments";
import Cookies from "js-cookie";
export default function PatientRoutes() {
	return (
		<Switch>
			<Route exact path="/patientLogin">
				<PatientLogin />
			</Route>
			<Route exact path="/patientLogin/bookAppointment">
				<BookAppointment />
			</Route>
			<Route exact path="/patientLogin/getPatientProfile">
				<GetPatientProfile patient_id={Cookies.get("patient_id")} />
			</Route>
			<Route exact path="/patientLogin/patientAppointments">
				<PatientAppointments />
			</Route>
		</Switch>
	);
}
