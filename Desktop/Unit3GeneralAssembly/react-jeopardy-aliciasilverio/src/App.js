import logo from './logo.svg';
import './App.css';
import './index.css'
import ScoreBoardComponent from './Scoreboard/scoreboardComponent';
import PromptComponent from './Prompts/promptComponent';
import SolutionComponent from './Solutions/solutionComponent';
import {useState, useEffect} from 'react';

function App() {
  const [question, setQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);


  const resetScore = () => {
    setScore(0);
  }
  const increaseScore = () => {
    setScore(score+question.value);
  }
  const decreaseScore = () => {
    setScore(score-question.value);
  }

  const getQuestion = async () => {
    const apiResponse = await fetch('https://jservice.io/api/random');
    const parsedResponse = await apiResponse.json();
    const newQuestion = parsedResponse[0];
    // Make an API call
    // Call setQuestion with a new response
    setQuestion(newQuestion);
    setIsRevealed(false);
  }

  useEffect(getQuestion, [])

  return (
    <div className="App">
        <h1 class="welcome">Welcome to Jeopardy!</h1>
        <br></br>
        {
          question.question ?
          <>
          <ScoreBoardComponent 
        increaseScore={increaseScore}
        decreaseScore={decreaseScore} 
        resetScore={resetScore} 
        score={score}>
        </ScoreBoardComponent>
        <PromptComponent getQuestion={getQuestion} question={question}></PromptComponent>
        <SolutionComponent 
        answer={question.answer}
        isRevealed={isRevealed}
        setIsRevealed={setIsRevealed}
        ></SolutionComponent>
        </>
        :
        <p>Loading...</p>
        }
        
    </div>
  );
}


export default App;
