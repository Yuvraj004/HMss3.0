import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button,Col,NavLink,Form,FormGroup,Input,Label,Nav,NavItem,Row} from "reactstrap";

const GetPatientProfile = (props) => {
  const [patientData, setPatientData] = useState({
    Id: "",
    name: "",
    email: "",
    address: "",
    phone: "",
    Role: "patient",
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
	patientData.Id = Cookies.get("patient_id");
    const headers = {
      authorization: Cookies.get("token"),
    };
    axios
      .post("http://localhost:4000/patient/editProfile", patientData, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.status);
		alert(res.data);
      })
	  .catch(err =>{
		console.log(err);
		alert(res.data);
	  });
  };

	return (
		<div style={{ display: "flex",flexDirection: "column",
			justifyContent: "center",alignItems: "center",flexWrap: "nowrap"}}>
			<Nav tabs>
			<NavItem>
				<NavLink>
				<Link to="/patientLogin">Doctor List</Link>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink>
				<Link to="/patientLogin/bookAppointment">Book Appointment</Link>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink active>
				<Link to="/patientLogin/getPatientProfile">Edit Profile</Link>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink>
				<Link to="/patientLogin/patientAppointments">View Appointments</Link>
				</NavLink>
			</NavItem>
			</Nav>
			<Row className="mt-4" >
				<Col>
					<h1>Edit Profile</h1>
					<Form >
						<FormGroup >
							<Row mt="3">
							<Col sm="2">
								<Label>Name</Label>
							</Col>
							<Col sm="10">
								<Input
								value={patientData.name}
								onChange={(e) =>
									setPatientData({ ...patientData, name: e.target.value })
								}
								/>
							</Col>
							</Row>
						</FormGroup>
						<FormGroup>
							<Row mt="3">
							<Col sm="2">
								<Label>Email</Label>
							</Col>
							<Col sm="10">
								<Input
								value={patientData.email}
								onChange={(e) =>
									setPatientData({ ...patientData, email: e.target.value })
								}
								/>
							</Col>
							</Row>
						</FormGroup>
						<FormGroup>
							<Row mt="3">
							<Col sm="2">
								<Label>Phone Number</Label>
							</Col>
							<Col sm="10">
								<Input
								value={patientData.phone}
								onChange={(e) =>
									setPatientData({ ...patientData, phone: e.target.value })
								}
								/>
							</Col>
							</Row>
						</FormGroup>
						<FormGroup>
							<Row mt="3">
								<Col sm="2">
									<Label>Adress</Label>
								</Col>
								<Col sm="10">
									<Input
									value={patientData.address}
									onChange={(e) =>
										setPatientData({ ...patientData, address: e.target.value })
									}
									/>
								</Col>
							</Row>
						</FormGroup>
						<FormGroup>
							<Button onClick={handleSubmit}>Submit</Button>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</div>
  	)
};

export default GetPatientProfile;