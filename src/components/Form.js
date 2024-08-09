import "./FormStyles.css"
import React from 'react'

const Form = () => {
	return (
		<div className="form">
			<form>
				<label>Your Name
					<input type="text"></input>
				</label>
				<label>Email
					<input type="email"></input>
				</label>
				<label>Subject
					<input type="text"></input>
				</label>
				<label>Message
					<textarea rows="6" placeholder="Type your message here" />
				</label>
				<button className="btn">Submit</button>
			</form>
		</div>
	)
}

export default Form