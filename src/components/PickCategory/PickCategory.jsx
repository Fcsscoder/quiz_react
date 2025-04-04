import { useContext } from "react"
import { QuizContext } from "../../context/quiz"

import Category from "../../img/category.svg"

import "./PickCategory.css"

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch({ type: "START_GAME", payload: category})
    dispatch({ type: "REORDER_QUESTIONS" })
  }

  return (
    <div id="category">
      <h2>Escolha uma categoria:</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <img src={Category} alt="Categoria do quiz" />
      <div>
      {quizState.questions.map((question) => {
          return <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
        })}
      </div>
    </div>
  )
}

export default PickCategory