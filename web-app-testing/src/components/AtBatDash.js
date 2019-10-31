import React, { useState } from "react";

const AtBatDash = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const addStrike = () => {
    if (strikes >= 2) {
      setStrikes(0); setBalls(0);
    } else 
      setStrikes(strikes + 1);
    
    
  };

  const addBall = () => {
    if (balls >= 3) {
      setStrikes(0); setBalls(0);
    } else 
      setBalls(balls + 1);
    
  };

  const addFoul = () => {
    if (strikes >= 2) {
      setStrikes(strikes);
    } else setStrikes(strikes + 1);
  };

  const hit = () => {
    setStrikes(0); setBalls(0);
  };

  return (
    <div>
      <div>
        <p data-testid="strikeText" >Strike:{strikes}</p>
        <p data-testid="ballText" >Balls:{balls}</p>
      </div>
      <div>
        <button onClick={() => addStrike()}>Strike</button>
        <button onClick={() => addBall()} >Ball</button>
        <button onClick={() => addFoul()} >Foul</button>
        <button onClick={() => hit()} >Hit</button>
      </div>
    </div>
  );
};

export default AtBatDash;
