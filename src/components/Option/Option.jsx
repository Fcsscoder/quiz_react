import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./Option.css";

const Option = ({ option, answer, onSelectOption, hide }) => {
  const [quizState] = useContext(QuizContext);

  return (
    <div
      className={`option 
        ${quizState.answerSelected && option === answer ? "correct" : ""} 
        ${quizState.answerSelected && option !== answer ? "wrong" : ""}
        ${hide ? "hide" : ""}`}>

      <p onClick={onSelectOption}>{option}</p>
    </div>
  );
};

export default Option;
