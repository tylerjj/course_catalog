import React from 'react'
import './App.css'
import Subsection from './Subsection.js'

class Section extends React.Component {

	constructor(props) {
		super(props);
		this.addToCart = this.addToCart.bind(this);
		this.removeFromCart = this.removeFromCart.bind(this);
	}

	addToCart() {
		this.props.add(this.props.courseNumber, this.props.data.number, null);
	}

	removeFromCart() {
		this.props.remove(this.props.courseNumber, this.props.data.number, null);
	}

	getSubsections() {
		let subsections = [];

		for (const subsection of Object.values(this.props.data.subsections)) {
			subsections.push(
				<li className="Section-Subsection">
					<Subsection data={subsection} courseNumber={this.props.courseNumber} sectionNumber={this.props.data.number} add={this.props.add} remove={this.props.remove} />
				</li>
			);
		}
		if (!subsections.length) {
			subsections.push(
				<li>None</li>
			)
		}
		return subsections;
	}

	getTimes() {
		let times = [];
		for (const timeslot of Object.values(this.props.data.time)) {
			Object.keys(this.props.data.time).map(function (key, index) {
				times.push(
					<li className="Section-Timeslot">{
						key.toString() + ": " + timeslot
					}</li>);
			});
		}
		return times;
	}
	render() {
		const data = this.props.data;
		const instructor = data.instructor;
		const location = data.location;
		const number = data.number;
		return (
			<div className="Section">
				<span className="Section-Number">Number: {number}</span>
				<button onClick={this.addToCart}>Add Section</button>
				<ul>
					<li className="Section-Instructor">Instructor: {instructor}</li>
					<li className="Section-Location">Location: {location}</li>
					<li className="Section-Times">
						<span>Times:</span>
						<ul>
							{
								this.getTimes()
							}
						</ul></li>
					<li className="Section-Subsections">
						<span>Subsections:</span>
						<ul>
							{this.getSubsections()}
						</ul>

					</li>
				</ul>


			</div>
		);


	}
}

export default Section;