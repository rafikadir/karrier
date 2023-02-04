import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo/black.png";
import { IoIosCall, IoMdMail } from "react-icons/io";


const navbarContent = [
	"Jobs for Fresher",
	"MR Role",
	"Salary",
	"Campus to Corporate",
	"Courses",
	"Corporate Training",
	"Gallery",
	"Faq",
	"Contact Us",
];
const path = [
	"jobs-for-fresher",
	"role-of-medical-representative",
	"salary-of-medical-representative",
	"campus-to-corporate",
	"job-oriented-course-after-graduation",
	"corporate-training",
	"Gallery",
	"faqs",
	"Contact-Us",
];


function Navbar() {
	const [width, setWidth] = useState(window.innerWidth);
	const [Drawer, setDrawer] = useState("none");

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	const ExpandMenu = () => {
		if (Drawer === "none") {
			setDrawer("flex");
		} else {
			setDrawer("none");
		}
	};

	if (width > 900) {
		return (
			<div className="fixed">
				<div className="contactBar">
					<a className="contact" href="tel:918948600666">
						<IoIosCall/>
						+91-8948600666
					</a>
					<a className="contact" href="tel:918303990366">
						<IoIosCall/>
						+91-8303990366
					</a>
					<a className="contact" href="mailto:info@karrier.in?subject=website query">
						<IoMdMail/>
						Email:info@karrier.in
					</a>
				</div>
				<div className="navbar">
					<NavLink className="navbar_logo" to="/" style={{ width: "150px" }}>
						<img src={logo} alt="logo" />
					</NavLink>
					<div className="navbar_links">
						
						{navbarContent.map((item, index) => (
							<NavLink
								className={({ isActive }) => (isActive ? "navbar_link_active" : "navbar_link_inactive")}
								key={index}
								to={`${path[index]}`}
							>
								<p className="navbar_link_txt">{item}</p>
							</NavLink>
						))}
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="fixed">
				<div className="contactBar">
					<div className="contact"><IoIosCall/> +91-8948600666</div>
					<div className="contact"><IoIosCall/> +91-8303990366</div>
					<div className="contact"><IoMdMail/>Email: info@karrier.in</div>
				</div>
				<div className="navbar">
					<NavLink className="navbar_logo" to="/" style={{ width: "140px" }}>
						<img src={logo} alt="logo" />
					</NavLink>
					<div className="navbar_Drawer">
						<input type="checkbox" value="drawer" onChange={ExpandMenu} unchecked />
						<div className="navbar_drawer_icon">
							<p className="drawer_line_1"></p>
							<p className="drawer_line_2"></p>
							<p className="drawer_line_3"></p>
						</div>
					</div>
					<div className="navbar_drawer_links" style={{ display: `${Drawer}` }}>
						<div className="drawerLinks">
							<NavLink
								className={({ isActive }) => (isActive ? "navbar_link_active" : "navbar_link_inactive")}
								to="/"
							>
								<input type="checkbox" value="drawer" onChange={ExpandMenu} unchecked />

							</NavLink>

							{navbarContent.map((item, index) => (
								<div className="drawerLinks">
									<NavLink
										className={({ isActive }) => (isActive ? "navbar_link_active" : "navbar_link_inactive")}
										key={index}
										to={`${path[index]}`}
									>
										<input type="checkbox" value="drawer" onChange={ExpandMenu} unchecked />

										<p className="navbar_link_txt">{item}</p>
									</NavLink>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
