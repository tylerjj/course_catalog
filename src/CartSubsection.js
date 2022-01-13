import React, { Component } from 'react'

class CartSubsection extends Component {

    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart() {
        this.props.remove(this.props.courseNumber, this.props.sectionNumber, this.props.subsectionNumber);
    }

    render() {
        const data = this.props.data;
        const number = data.number;
        if (!data.inCart) {
            return null;
        }
        return (
            <div className="Subsection">
                <span className="Subsection-Number">Subsection Number: {number}</span>
                <button onClick={this.removeFromCart}>Remove Subsection</button>
            </div>
        )
    }
}

export default CartSubsection;