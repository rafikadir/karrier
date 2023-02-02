import React from "react";
import "./Footer.css";
import footerBackground from "../../assets/footerBackground2.jpg";
import logo from "../../assets/logo/golden.png";
import instagram from "../../assets/socialIcons/instagram.svg";
import facebook from "../../assets/socialIcons/facebook.svg";
import twitter from "../../assets/socialIcons/twitter.svg";
import linkedIn from "../../assets/socialIcons/linkedIn.svg";
import { IoIosCall, IoMdMail } from "react-icons/io";

function Footer() {
	return (
		<div
			className="footer"
		>
			<div className="footer_top">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>

				<div className="contact_sec_1 contact_mail">
					<a href="https://g.page/KarrierMR?share">Google Profile</a>
					<a href="https://g.page/r/CWJc8mX1oUKhEBE/review">Google Reviews</a>
					<a href="tel:918948600666"><IoIosCall/> +91-8948600666</a>
					<a href="tel:918303990366"><IoIosCall/> +91-8303990366</a>
					<a href="mailto:info@karrier.in?subject=website query"><IoMdMail/> Email:info@karrier.in</a>
				</div>
				<div className="contact_sec_2">
					<p>Follow us on</p>
					<div className="contact_links">
						<div className="contact_icon">
							<a href="https://www.instagram.com/karrierinstitute/" target="_blank" rel="noopener noreferrer">
								<img src={instagram} alt="Instagram" />
							</a>
						</div>
						<div className="contact_icon">
							<a href="https://www.facebook.com/karriersolution/" target="_blank" rel="noopener noreferrer">
								<img src={facebook} alt="Facebook" />
							</a>
						</div>

						<div className="contact_icon">
							<a href="https://twitter.com/karriermr" target="_blank" rel="noopener noreferrer">
								<img src={twitter} alt="Twitter" />
							</a>
						</div>

						<div className="contact_icon">
							<a href="https://www.linkedin.com/in/karrier/" target="_blank" rel="noopener noreferrer">
								<img src={linkedIn} alt="LinkedIn" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<p className="footer_divider"></p>
			<div className="footer_bot">Copyright 2023 Karrier Training & Evolution Institute</div>
		</div>
	);
}

export default Footer;
