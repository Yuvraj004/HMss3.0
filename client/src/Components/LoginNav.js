import { Link } from "react-router-dom";
import { Nav, Navbar, NavbarText, NavItem } from "reactstrap";

export default function LoginNav({ msg }) {
	return (
		<Navbar style={{ backgroundColor: "#fff" }} expand="md">
			<Nav className="mr-auto" navbar>
				<NavItem
					style={{padding: "20px",fontSize: "20px"}}
				>
					<Link
						style={{ textDecoration: "none" }}
						to="/"
					>
						Home
					</Link>
				</NavItem>
			</Nav>

			{msg ? (
				<></>
			) : (
				<NavbarText >
					<Link to="/signUp" >
						New User? SignUp!!
					</Link>
				</NavbarText>
			)}
		</Navbar>
		
	);
}
