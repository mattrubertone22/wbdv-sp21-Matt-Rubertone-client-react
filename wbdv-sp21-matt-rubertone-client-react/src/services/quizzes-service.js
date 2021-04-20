const QUIZZES_URL = 'http://localhost:3001/api/quizzes';

const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json());
}

const findQuizById = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json());
}

const submitQuiz = (quizId, questions) => {
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result))
}


const quizApi = {
    findAllQuizzes, findQuizById, submitQuiz
}

export default quizApi