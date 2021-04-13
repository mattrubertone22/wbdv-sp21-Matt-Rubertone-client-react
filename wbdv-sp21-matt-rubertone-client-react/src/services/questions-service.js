const QUIZZES_URL = 'http://localhost:3001/api/quizzes';

const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json());
}

const questionApi = {
    findQuestionsForQuiz
}

export default questionApi