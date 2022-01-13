import React from 'react';
import './App.css';
import Section from './Section'
import SectionArea from './SectionArea';
class Course extends React.Component {

  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  getRequisites() {

    const requisites = this.props.data.requisites;

    if (requisites.length === 0) {
      return "None";
    }
    else {
      let string = "";
      //https://stackoverflow.com/questions/45812160/unexpected-comma-using-map
      requisites.map(function (requirement, index) {
        // Wrap the courses within each requirement in ( ), with an OR between
        // each two courses. 
        string = "(" + requirement.map(function (courses, index2) {
          if (index2 !== requirement.length - 1) {
            return courses + " OR ";
          } else return courses;
        }).join("") + ")";
        // If this isn't the last requirement, append an AND to the string of
        // requirements. 
        if (index !== requisites.length - 1) {
          return string + " AND ";
        } else return string;
      });

      // return our string of requirements
      return string;
    }
  }

  addToCart() {
    this.props.add(this.props.data.number, null, null);
  }

  removeFromCart() {
    this.props.remove(this.props.data.number, null, null);
  }

  render() {
    const data = this.props.data;
    if (data.length === 0) {
      return null;
    }
    const credits = data.credits;
    const number = data.number;
    const name = data.name;
    const description = data.description;
    const subject = data.subject;
    const keywords = data.keywords;
    const requisites = this.getRequisites();
    const sections = data.sections;
    return (
      <div>

        <h4>
          {number}: {name} | ({credits} Cr.)
        </h4>

        <button onClick={this.addToCart}>Add Course</button>

        <p className="Course-Subject">
          Subject:  <span className="Course-SubjectValue">{subject}</span>
        </p>

        <p className="Course-Description">
          Description: <span className="Course-DescriptionValue">{description}</span>
        </p>

        <p className="Course-Keywords">Keywords: <span classname="Course-KeywordsValue">{keywords.map(function (keyword, index) {
          if (index !== keywords.length - 1) {
            return keyword + ", "
          } else return keyword;
        })}</span>
        </p>

        <ul>
          <p>
            <span><h5>Requisites: </h5></span>
            {requisites}
          </p>

          <h5>Sections:</h5>
          {
            <SectionArea
              sections={sections}
              add={this.props.add}
              remove={this.props.remove}
              courseNumber={number}
            />
          }
        </ul>

      </div>
    )
  }
}

export default Course;
