import React from 'react'
import {Link} from "react-router-dom";
import CourseCard from './course-card';

const CourseGrid = ({courses}) =>
    <div>
        <Link to="/courses/table">
            <i className="fas fa-2x fa-list float-right"></i>
        </Link>
      <h2>Course Grid</h2>
      
      <CourseCard courses={courses}/>

    </div>

export default CourseGrid