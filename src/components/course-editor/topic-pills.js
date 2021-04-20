import React from 'react'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom"

const TopicPills = () => {
    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    return (<div>
        {courseId}{moduleId}{lessonId}
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link className={`nav-link ${topicId === 'ABC123' ? 'active' : ''}`}
                      to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/Topic1`}>
                    Topic 1
                </Link>
            </li>
            <li className="nav-item">
                <Link className={`nav-link ${topicId === 'ABC234' ? 'active' : ''}`}
                      to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/Topic2`}>
                    Topic 2
                </Link>
            </li>
        </ul>
    </div>)
}

export default TopicPills