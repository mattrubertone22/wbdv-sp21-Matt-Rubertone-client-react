import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import Question from "./questions/question";
import questionApi from "../../services/questions-service";

const Quiz = () => {
    const {courseId, quizId} = useParams();
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        questionApi.findQuestionsForQuiz(quizId).then(questions => setQuestions(questions))
        },[courseId])

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
        </div>
    );
}

export default Quiz;