export const choices = [
  { id: 1, name: "Rock", emoji: "✊" },
  { id: 2, name: "Paper", emoji: "✋" },
  { id: 3, name: "Scissors", emoji: "✌️" },
];

export const determineWinner = (userChoice, compChoice) => {
  if (userChoice.id === compChoice.id) return "draw";

  if (
    (userChoice.id === 1 && compChoice.id === 3) ||
    (userChoice.id === 2 && compChoice.id === 1) ||
    (userChoice.id === 3 && compChoice.id === 2)
  ) {
    return "win";
  }

  return "lose";
};
