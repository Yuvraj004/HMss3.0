
import React from "react";

function PureFooter() {
	return (
		<div className=" footer">
			<footer id="footer">
				<div className="footer-top">
					<div className="container">
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
									<li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 footer-links">
								<h4 >Our Services</h4>
								<ul >
									<li style={{color:"whitesmoke !important"}}><i className="bx bx-chevron-right"></i> <a href="#" >Consultation</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" className="law">e-Records</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" className="law">Health Analysis</a></li>
									<li><i className="bx bx-chevron-right"></i> <a href="#" className="law">Emergency Help</a></li>
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
