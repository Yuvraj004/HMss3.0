
import React from "react";
import bg from "../assets/footerBg.jpg";

function PureFooter() {
	return (
		<div className="footerbg" >
			<footer id="footer">
				<div className="footer-top"> 	
					<div className="">
						<div className="row">

							<div className="col-lg-3 col-md-6 footer-contact" style={{textAlign:"start"}}>
								<h3>GetWell</h3>
								<p>
									Guru Gobind Singh <br />
									Indraprastha University<br />
									 Dwarka, New Delhi <br /><br />
									<strong>Phone:</strong> +91 9999569456<br />
									<strong>Email:</strong> yuvrajchat@gmail.com<br />
								</p>
							</div>

							<div className="col-lg-2 col-md-6 footer-links">
								<h4>Useful Links</h4>
								<ul>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>Home</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>About us</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>Services</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>Terms of service</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>Privacy policy</a></li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4 >Our Services</h4>
								<ul >
									<li ><i className="bx bx-chevron-right"></i> <a href="#" id="mainbtn" style={{color:"whitesmoke"}} >Consultation</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>e-Records</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>Health Analysis</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" style={{color:"whitesmoke"}}>Emergency Help</a></li>
									{/* <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li> */}
								</ul>
							</div>

							<div className="col-lg-4 col-md-6 footer-newsletter">
								<h4>Join Our Newsletter</h4>
								<p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
								<form action="" method="post">
									<input type="email" name="email" />
									<input type="submit" value="Subscribe" />
								</form>
							</div>

						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default PureFooter;
