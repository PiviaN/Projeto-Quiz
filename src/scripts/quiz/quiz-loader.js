import Quiz from './quiz.js'
import Auxiliary from "../auxiliary/auxiliary.js"

const quiz = new Quiz()
const auxiliary = new Auxiliary()

let pageQuiz = auxiliary.queryParams.quiz || 1

if (pageQuiz > quiz.structures.length || pageQuiz < 1 || isNaN(pageQuiz)) {
    window.location.href = '/index.html'
} else {
    quiz.loadPageStructure(pageQuiz);
}