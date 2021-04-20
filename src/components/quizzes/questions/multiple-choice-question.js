import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [answer, setAnswer] = useState(null);
    const [correct, setCorrect] = useState(null);

    return(
        <div>
            <h2>{question.question}
            {
                correct === true &&
                <i className="fas fa-check float-right"/>
            }
            {
                correct === false &&
                <i className="fas fa-times float-right"/>
            }
            </h2>
            {
                question.choices.map((choice) => {
                    return(
                        <ul className="list-group">
                            <li className="list-group-item">
                                <label>
                                    <input type="radio" onClick={() => setAnswer(choice)} name={question._id}/>
                                    {choice}
                                </label>
                            </li>
                        </ul>
                    )
                })
            }
            <br/>
        </div>
    )
}

export default MultipleChoiceQuestion;