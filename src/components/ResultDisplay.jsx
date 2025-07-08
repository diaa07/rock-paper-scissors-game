import React from "react";
import "./ResultDisplay.css";

const resultMessages = {
  win: { emoji: "🎉", text: "You Win!" },
  lose: { emoji: "😢", text: "You Lose!" },
  draw: { emoji: "🤝", text: "Draw!" },
};

const ResultDisplay = ({ result, compChoice, onPlayAgain }) => {
  return (
    <div className="result-display">
      <div className="result-content">
        <span className="result-emoji">{resultMessages[result].emoji}</span>
        <h2>{resultMessages[result].text}</h2>
        {compChoice && (
          <p>
            Comp chose: {compChoice.emoji} {compChoice.name}
          </p>
        )}
        <button className="play-again-btn" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
