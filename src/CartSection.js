import React, { Component } from 'react'
import CartSubsection from './CartSubsection';
class CartSection extends Component {

    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart() {
        this.props.remove(this.props.courseNumber, this.props.sectionNumber, null);
    }

    getSubsections() {
        let subsections = [];

        for (const subsection of Object.values(this.props.data.subsections)) {
            if (subsection.inCart) {
                subsections.push(
                    <li className="Section-Subsection">
                        <CartSubsection data={subsection} remove={this.props.remove} courseNumber={this.props.courseNumber} sectionNumber={this.props.sectionNumber} subsectionNumber={subsection.number} />
                    </li>
                );
            }
        }
        if (!subsections.length) {
            subsections.push(
                <li>None</li>
            )
        }
        return subsections;
    }

    render() {
        const data = this.props.data;
        const number = data.number;
        if (!data.inCart) {
            return null;
        }
        return (
            <div className="Section">
                <span className="Section-Number">Section Number: {number}</span>
                <button onClick={this.removeFromCart}>Remove Section</button>
                <ul>
                    <li className="Section-Subsections">
                        <span>Added Subsections</span>
                        <ul>
                            {this.getSubsections()}
                        </ul>
                    </li>
                </ul>


            </div>
        );


    }
}

export default CartSection;