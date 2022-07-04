
// quiz[a lo mejor ser[ia un for que ademas le meta el ID  correspondiente al tema  en lugar de usar map ]]

import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(
  (question) =>
    new Question(question.question, question.choices, question.answer)
);