import React from 'react'
import './App.css'

class Subsection extends React.Component {

	constructor(props) {
		super(props);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
	}


	addToCart() {
		this.props.add(this.props.courseNumber, this.props.sectionNumber, this.props.data.number);
	}

	removeFromCart() {
		this.props.remove(this.props.courseNumber, this.props.sectionNumber, this.props.data.number)
	}
	getTimes() {

		let times = [];
		for (const timeslot of Object.values(this.props.data.time)) {
			Object.keys(this.props.data.time).map(function (key, index) {
				times.push(
					<li className="Subsection-Timeslot">{
						key.toString() + ": " + timeslot
					}</li>);
			});
		}
		return times;
	}

	render() {
		const data = this.props.data;
		const location = data.location;
		const number = data.number;
		return (
			<div className="Subsection">
				<span className="Subsection-Number">Number: {number}</span>
				<button onClick={this.addToCart}>Add Subsection</button>
				<ul>
					<li className="Subsection-Location">Location: {location}</li>
					<li className="Subsection-Times">
						<span>Times:</span>
						<ul>
							{this.getTimes()}
						</ul>
					</li>
				</ul>
			</div>
		);
	}
}

export default Subsection;