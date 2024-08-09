import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
	return (
		<div className="about">
			<div className="left">
				<h1>Who Am I?</h1>
				<p>A student and a soon-to-be software developer.</p>
				<Link to="/contact" className="btn">Contact</Link>
			</div>
			<div className="right">
				{/* TODO: add some image here */}
			</div>

		</div>
	)
}

export default AboutContent