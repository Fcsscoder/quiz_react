import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz.jsx'

// Componentes

import Question from './components/Question/Question.jsx'
import Welcome from './components/Welcome/Welcome.jsx'
import GameOver from './components/GameOver/GameOver.jsx'
import PickCategory from './components/PickCategory/PickCategory.jsx'

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <>
      <div className="App">
        <h1>Quiz App</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <PickCategory />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </>
  )
}

export default App
