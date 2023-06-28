import React, { useState } from "react";

const Card = ({ cardData }) => {
  const [isSelected, setIsSelected] = useState(false);
  const { question, answer } = cardData;
  return (
    <div
      className={isSelected ? "selected" : ""}
      onClick={() => setIsSelected(!isSelected)}
    >
      {isSelected ? answer : question}
    </div>
  );
};

export default Card;
