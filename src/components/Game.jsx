import React, { useState, useEffect } from "react";
import ChoiceButton from "./ChoiceButton";
import ResultDisplay from "./ResultDisplay";
import { determineWinner, choices } from "../utils/gameLogic";
import "./Game.css";

const Game = () => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const savedUserScore = localStorage.getItem("userScore");
    const savedCompScore = localStorage.getItem("compScore");

    if (savedUserScore) setUserScore(parseInt(savedUserScore));
    if (savedCompScore) setCompScore(parseInt(savedCompScore));
  }, []);

  const handleChoice = (userChoice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex];
    setCompChoice(compChoice);

    const gameResult = determineWinner(userChoice, compChoice);
    setResult(gameResult);
    setShowResult(true);

    if (gameResult === "win") {
      const newScore = userScore + 1;
      setUserScore(newScore);
      localStorage.setItem("userScore", newScore.toString());
    } else if (gameResult === "lose") {
      const newScore = compScore + 1;
      setCompScore(newScore);
      localStorage.setItem("compScore", newScore.toString());
    }
  };

  const handlePlayAgain = () => {
    setShowResult(false);
  };

  const handleReset = () => {
    setUserScore(0);
    setCompScore(0);
    setShowResult(false);
    localStorage.removeItem("userScore");
    localStorage.removeItem("compScore");
  };

  return (
    <div className="game-container">
      {showResult && (
        <ResultDisplay
          result={result}
          compChoice={compChoice}
          onPlayAgain={handlePlayAgain}
        />
      )}

      <div className="score-board">
        <div className="score">
          <h2>You: {userScore}</h2>
        </div>
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
        <div className="score">
          <h2>Comp: {compScore}</h2>
        </div>
      </div>

      <div className="choices">
        {choices.map((choice) => (
          <ChoiceButton
            key={choice.id}
            choice={choice}
            onClick={() => handleChoice(choice)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
