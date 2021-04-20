const QUIZZES_URL = 'http://localhost:3001/api/quizzes';

const findQuestionsForQuiz = (qzid) => {
    return fetch(`${QUIZZES_URL}/${qzid}/questions`)
        .then(response => response.json());
}

const questionApi = {
    findQuestionsForQuiz
}

export default questionApi