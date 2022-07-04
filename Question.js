//esta aprte del programa debera de ser cambiado mas adelante 
//  es clase  necesita la pregunta, las opciones y la respuesta


class Question {
  /**
   *
   * @param {string} text alguna pregunta
   * @param {string[]} choices las opciones un array
   * @param {string} answer la respuesta
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }

  /**
   *
   * @param {string} choice La seleccionada, podr[ia ser luego un ID]
   * @returns {boolean} si es correcto manda true para el contador
   */
  correctAnswer(choice) {
    return choice === this.answer; // mas adelante debe marcar el ID de la pregunta para sacarla del pool de temas de video
  }
}

export { Question };