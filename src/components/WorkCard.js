import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
	return (
		<div className="project-card">
			<img src={props.imgSrc} alt="project" />
			<h2 className="project-title">{props.title}</h2>
			<p>{props.text}</p>
			<div className="btn-container">
				<NavLink to={props.view}
					className="btn">View</NavLink>
				<NavLink to={props.source}
					className="btn">Source</NavLink>
			</div>
		</div>
	)
}

export default WorkCard