import React, { Component } from 'react'
import CartSection from './CartSection';
class CartSectionArea extends Component {

    getSections() {
        let sections = [];



        for (const section of Object.values(this.props.sections)) {
            if (section.inCart) {
                sections.push(
                    <li><CartSection data={section} remove={this.props.remove} courseNumber={this.props.courseNumber} sectionNumber={section.number} /></li>
                )
            }

        }

        if (!sections.length) {
            sections.push(
                <li>None</li>
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

export default CartSectionArea;