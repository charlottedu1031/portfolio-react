import "./WorkCardStyles.css"
import React from 'react'
import WorkCard from "./WorkCard.js"
import WorkCardData from "./WorkCardData"
import { nanoid } from 'nanoid'

const Work = () => {

	const WorkCardEles = WorkCardData.map(card => {
		return (
			<WorkCard
				key={nanoid()}
				imgSrc={card.imgSrc}
				title={card.title}
				text={card.text}
				view={card.view}
				source={card.source}
			/>
		)
	})
	return (
		<div className="work-container">
			<h1 className="project-heading">Projects</h1>
			<div className="project-lists">
				{WorkCardEles}
			</div>
		</div>
	)
}

export default Work