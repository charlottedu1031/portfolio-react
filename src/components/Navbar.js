import "./NavbarStyles.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
	const [click, setClick] = useState(false)
	const hanleClick = () => setClick(!click)

	const [bgColor, setBgColor] = useState(false)

	const addBgColor = () => {
		if (window.scrollY >= 100) {
			setBgColor(true)
		} else {
			setBgColor(false)
		}
	}

	window.addEventListener("scroll", addBgColor)
	return (
		<div className={bgColor ? "header header-bg" : "header"}>
			<Link to="/">
				<h1>Portfolio</h1>
			</Link>
			<ul className={click ? "nav-menu active" : "nav-menu"}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/project">Project</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className="hamburger" onClick={hanleClick}>
				{click ? <FaTimes size={20} style={{ color: "#fff" }} />
					: <FaBars size={20} style={{ color: "#fff" }} />}
			</div>

		</div>
	)
}

export default Navbar