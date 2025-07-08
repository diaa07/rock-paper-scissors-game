import React, { useState } from "react";
import "./ChoiceButton.css";

const ChoiceButton = ({ choice, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
    onClick();
    setTimeout(() => setIsActive(false), 150);
  };

  return (
    <button
      className={`choice-button ${isActive ? "active" : ""}`}
      onClick={handleClick}
      aria-label={choice.name}
    >
      <span className="emoji">{choice.emoji}</span>
    </button>
  );
};

export default ChoiceButton;
