import React, { Component } from 'react'
import CartSectionArea from './CartSectionArea';
class CartCourse extends Component {

    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart() {
        this.props.remove(this.props.courseNumber, null, null);
    }

    render() {
        const data = this.props.data;
        if (data.length === 0 || !data.inCart) {
            return null;
        }

        const name = data.name;
        const number = data.number;
        const credits = data.credits;
        const sections = data.sections;

        return (
            <div>
                <h4>
                    {number}: {name} | ({credits} Cr.)
                </h4>
                <button onClick={this.removeFromCart}>Remove Course</button>
                <ul>

                    <h5>Added Sections:</h5>
                    {
                        <CartSectionArea sections={sections} remove={this.props.remove} courseNumber={this.props.courseNumber} />
                    }
                </ul>
            </div>
        )
    }
}

export default CartCourse;