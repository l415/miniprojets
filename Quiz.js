//@ts-check




import { Question } from "./Question.js";

export class Quiz {
  score = 0;
  questionIndex = 0;  //   para ex[amenes rapidos o  por tema se puede modificar esa varible desde cero y hasta 128

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions;
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionIndex() {
    return this.questions[this.questionIndex];  //  nos muestra en que pregunta va
  }

  isEnded() {
    return this.questions.length === this.questionIndex;//   si las preguntas son iguales a la longitud del indice final
  }

  guess(answer) { //  cuando entra una respuesta incrementa el Question index 1   tambi[en maneja el score]
    if (this.getQuestionIndex().correctAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
}