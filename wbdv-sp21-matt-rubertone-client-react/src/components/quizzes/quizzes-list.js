import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizApi from "../../services/quizzes-service";

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizApi.findAllQuizzes().then(quizzes => setQuizzes(quizzes));
    }, [courseId])
    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item">
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default QuizzesList;