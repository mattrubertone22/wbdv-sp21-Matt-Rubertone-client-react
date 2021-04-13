/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseRow = ({
  course,
  deleteCourse,
  updateCourse,
}) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(course.title);

  const saveCourse = () => {
    setEditing(false);
    const newCourse = {
      ...course,
      title: title,
    };
    updateCourse(newCourse);
  };

  return (
    <tr>          
      <td className="text-primary">
        {!editing && <i className="fas fa-file-alt"></i>}
        {!editing && <Link to={`/courses/table/edit/${course._id}`}>{course.title}</Link>}
        {editing && (
          <input
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        )}
      </td>
      <td title="owned-by" className="d-none d-md-table-cell">
        {course.owner}
      </td>
      <th title="last-modified" className="d-none d-lg-table-cell">
        {course.lastModified}
      </th>
        <th title="quizzes" className="d-none d-lg-table-cell">
            <Link to={`/courses/${course._id}/quizzes`} className="float-left">
                Quizzes
            </Link>
        </th>
      <th title="sorting" className="d-none d-lg-table-cell">
        <i className="fas fa-th"></i>
        <i className="fas fa-sort-alpha-down"></i>
      </th>
      <td>
        
        {/* <i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

        <span style={{color: 'green'}}>
        {editing && (
          <i onClick={() => saveCourse()} className="fas fa-check"></i>
        )}
        </span>

        <span style={{color: 'red'}}>
        {editing &&  <i onClick={() => deleteCourse(course)} className="fas fa-times"></i>}
        </span>

        {!editing && (
          <i onClick={() => setEditing(true)} className="fas fa-pencil-alt"></i>
        )}
      </td>
    </tr>
  );
};

export default CourseRow;
