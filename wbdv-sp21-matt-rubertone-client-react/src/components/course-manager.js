import React from 'react'
import CourseTable from './course-table'
import { Link, Route } from 'react-router-dom'
import courseService from '../services/course-service'
import CourseGrid from './course-grid'

class CourseManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
        this.updateInput = this.updateInput.bind(this);
    }
      
        componentDidMount() {
          courseService.findAllCourses()
              .then(courses => this.setState({courses}))
        }
      
        updateCourse = (course) => {
          courseService.updateCourse(course._id, course)
              .then(status => {
                  this.setState((prevState) => {
                      let nextState = {...prevState}
                      nextState.courses = prevState.courses.map(c => {
                          if(c._id === course._id) {
                              return course
                          } else {
                              return c
                          }
                      })
                      return nextState
                  })
              })
        }
      
        deleteCourse = (course) => {
          courseService.deleteCourse(course._id)
              .then(status => {
                this.setState((prevState) => ({
                  courses: prevState.courses.filter(c => c._id !== course._id)
                }))
              })
        }

        updateInput(event) {
            this.setState({title: event.target.value})
        }
      
        addCourse = () => {
          const newCourse = {
            title: this.state.title,
            owner: "me",
            lastModified: "2/21/2021"
          }
          courseService.createCourse(newCourse)
              .then(actualCourse => {
                this.state.courses.push(actualCourse)
                this.setState(this.state)
              })
        }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-1">
                        <button type="submit" className="btn btn-default">
                            <Link to="/">
                                <i className="fas fa-2x fa-home float-right"></i>
                            </Link>
                        </button>
                    </div>
                    <div className="col-sm-3 d-lg-block">
                        <h1 id="the-course-list-heading">Course Manager</h1>
                    </div>
                    <div className="col-sm-7 form-control-lg">
                        <input
                            id="create-course"
                            size="75"
                            type="text"
                            title="create-course"
                            placeholder="New Course"
                            onChange={this.updateInput}
                        />
                    </div>
                    <div className="col-sm-1 add-button">
                        <span style={{color: 'red'}}>
                        <i className="fas fa-plus-circle" onClick={this.addCourse} />
                        </span>
                    </div>
                </div>
                <Route path="/courses/table" exact={true} >
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid" exact={true} >
                        <CourseGrid courses={this.state.courses}/>
                </Route>
            </div>
        )
    }
}
export default CourseManager;