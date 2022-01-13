import React, { Component } from 'react'
import CartCourse from './CartCourse';
class Cart extends Component {


    getCourses() {
        let courses = [];

        for (const course of Object.values(this.props.allCourses)) {
            if (course.inCart) {
                courses.push(
                    <CartCourse courseNumber={course.number} remove={this.props.remove} data={course} />
                )
            }

        }

        if (!courses.length) {
            courses.push(
                <li>Empty Cart</li>
            )
        }
        return courses;
    }

    render() {
        console.log(this.props.allCourses);
        return (
            <div>{this.getCourses()}</div>
        )
    }
}

export default Cart;