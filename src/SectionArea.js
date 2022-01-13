import React, { Component } from 'react'
import "./App.css";
import Section from "./Section";

class SectionArea extends Component {
    getSections() {
        let sections = [];

        for (const section of Object.values(this.props.sections)) {
            sections.push(
                <li><Section data={section} courseNumber={this.props.courseNumber} sectionNumber={section.number} add={this.props.add} remove={this.props.remove} /></li>
            )
        }

        return sections;
    }

    render() {
        return (
            <div className="SectionArea">
                <ul className="SectionArea-SectionList">
                    {this.getSections()}
                </ul>
            </div>
        )
    }
}

export default SectionArea;