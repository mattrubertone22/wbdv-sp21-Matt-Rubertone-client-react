import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionApi from "../../services/questions-service";
import quizApi from "../../services/quizzes-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        questionApi.findQuestionsForQuiz(quizId).then(questions => setQuestions(questions))
        },[courseId])

    const submitQuiz = () => {
        quizApi.submitQuiz(quizId, questions);
    }

    return(
        <div>
            <h2>Quiz {quizId}</h2>
            <ul className="list-group">
                {
                    questions.map(question =>
                    <li className="list-group-item">
                        <Question question={question}/>
                    </li>
                    )
                }
            </ul>
            <button onClick={submitQuiz}>
                Submit Quiz
            </button>
        </div>
    );
}

export default Quiz;