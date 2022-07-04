export class UI {
  constructor() {}

  /**
   *
   * @param {string} text  / es el texto a renderizar
   */
  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerHTML = text; //  regresa el text de la pregunta, basicamente la pregunta
  }

  /**
   *
   * @param {string[]} choices
   */
  showChoices(choices, callback) {//   renderiza las opciones
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {//   hace un arreglo flexible sobre todas las posibles opciones
      const button = document.createElement("button"); // genera un boton por cada i
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "button";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  showScores(score) { // muestra la calificaci[on, se puede mandar esta finci[on a los padres]]
    const gameOverHTML = `
      <h1>Resultado</h1>
      <h2 id="score">Tu calificación: ${score}</h2>
      `;
 

    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Pregunta ${currentIndex} de ${total}`;
  }
}