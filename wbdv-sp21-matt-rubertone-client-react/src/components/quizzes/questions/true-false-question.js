import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null);
    const [correct, setCorrect] = useState(null);

    const submitQuestion = () => {
        if (answer === question.correct) {
            setCorrect(true);
            return;
        }
        setCorrect(false);

    }
    return (
        <div>
            <h4>
                {question.question}
                {
                    correct === true &&
                    <i className="fas fa-check float-right"/>
                }
                {
                    correct === false &&
                    <i className="fas fa-times float-right"/>
                }
            </h4>
            <br/>
            <label><input
                type="radio"
                onClick={() => setAnswer("true")}
                name={question._id}/>True</label>
            <br/>
            <label><input
                type="radio"
                onClick={() => setAnswer("false")}
                name={question._id}/>False</label>
            <br/>
            <br/>
            <button onClick={submitQuestion}>
                Grade
            </button>
        </div>

    )
}

export default TrueFalseQuestion;