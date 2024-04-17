import React from "react";

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
				
			</>
		);
	}
}
export default LogIn;
