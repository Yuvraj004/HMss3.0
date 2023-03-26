import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
function PureFooter() {
	return (
		<div className=" footer">
			<div style={{ flex: "1.5" }}>
				<h2>Contact Us</h2>
				<ul className="list-unstyled">
					<li>
						<FontAwesomeIcon icon={faPhone} />
						+91 12345678 90
					</li>
					<li>
						<a href="https://gmail.com" style={{ color: "white" }}>
							<FontAwesomeIcon icon={faEnvelope} />{" "}
							contact@global.com
						</a>
					</li>
				</ul>
			</div>
			<div style={{ flex: "1" }}>
				
				<h2>Address</h2>
				<p>H.NO 123/456</p>
				<p>Heaven street</p>
				<p>London</p>
			</div>
			<div style={{ flex: "1" }}>
				<SocialIcon
					style={{ margin: "5px" }}
					url="https://github.com/Yuvraj004"
					fgColor="white"
				/>
            <footer className="flex">
                <div className="terms">
                    <p>terms and conditions</p>
                </div>
            </footer>
			</div>
		</div>
	);
}

export default PureFooter;
