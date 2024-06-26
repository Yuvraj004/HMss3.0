import { Switch, Route } from "react-router-dom";
// import { Row, Navbar, Nav, NavItem, NavbarText } from "reactstrap";
// import Body from "./Components/body";
import "./App.css";
// import Footer from "./Components/footer";
import EntryRoutes from "./Routes/entryRoutes";
import PureFooter from "./Components/PureFooter";
import Home from "./Components/Home";
// import VacantBeds from "./Components/Hospitals/VacantBeds";
function App() {
	return (
		<div className="App">
			
			<Switch>
				<Route exact path="/">
					<Home/>
					{/* <div className="container">
						<PureBody role="Admin" src={admin} link="/adminLogin" /> */}
						
				</Route>
				<EntryRoutes />
			</Switch>
			
			<PureFooter /> 
		</div>
	);
}
export default App;
