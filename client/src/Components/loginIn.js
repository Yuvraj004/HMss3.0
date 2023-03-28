import React from "react";
import { FormGroup, Row, Col, Label, Input, Button } from "reactstrap";
class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
		this.inputRef = React.createRef();
	}
	onTrigger = (event) => {
		this.props.fun(this.state.email, this.state.password);
		event.preventDefault();
	};
	componentDidMount() {
		this.inputRef.current.focus();
	}
	render() {
		return (
			<>
				<FormGroup>
					<Row>
						<Col sm="0" md="2"></Col>
						<Col sm="12" md="10">
							<h1 style={{ fontFamily: "cursive" }}>Login</h1>
						</Col>
						<Col md="2">
							<Label>Email</Label>
						</Col>
						<Col md="10">
							<Input
								innerRef={this.inputRef}
								type="email"
								onChange={(e) =>
									this.setState({ email: e.target.value })
								}
							/>
						</Col>
					</Row>
				</FormGroup>
				<FormGroup>
					<Row>
						<Col md="2">
							<Label>Password</Label>
						</Col>
						<Col md="10">
							<Input
								type="password"
								onChange={(e) =>
									this.setState({ password: e.target.value })
								}
							/>
						</Col>
					</Row>
				</FormGroup>
				<FormGroup>
					<Row>
						<Col md="2"></Col>
						<Col md="10">
							<Button
								style={{ backgroundColor: "#343a40" }}
								onClick={(e) => this.onTrigger(e)}
							>
								Log In
							</Button>
						</Col>
					</Row>
					<Row>
						<Col md="2"></Col>
						<Col md="10" >
							<div className="mt-3" id="g_id_onload"
								data-client_id="YOUR_GOOGLE_CLIENT_ID"
								data-login_uri="https://your.domain/your_login_endpoint"
								data-auto_prompt="false">
							</div>
							<div class="g_id_signin"
								data-type="standard"
								data-size="large"
								data-theme="outline"
								data-text="sign_in_with"
								data-shape="rectangular"
								data-logo_alignment="left">
							</div>
						</Col>
					</Row>
				</FormGroup>
			</>
		);
	}
}
export default LogIn;
