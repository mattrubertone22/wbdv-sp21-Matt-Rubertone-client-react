import React from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({courses}) =>
    <div className="row">
    {
        courses.map(course =>
            <div className="card" style={{width: "18rem", margin: "15px"}}>
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">Owner: {course.owner}</p>
                    <p className="card-text">Last Modified: {course.lastModified}</p>
                    <Link to="/editor" className="btn btn-primary">
                        Edit Course
                    </Link>
                </div>
            </div>
        )
    }
    </div>
export default CourseCard;