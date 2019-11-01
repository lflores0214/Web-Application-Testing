import React, { useState } from "react";

const AtBatDash = () => {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);
  const [htRuns, setHtRuns] = useState(0);
  const [atRuns, setAtRuns] = useState(0);

  const htRun = () => {
    setHtRuns(htRuns + 1);
  };
  const atRun = () => {
    setAtRuns(atRuns + 1);
  };
  const scoreReset = () => {
    setAtRuns(0);
    setHtRuns(0);
  };

  const addStrike = () => {
    if (strikes >= 2) {
      setStrikes(0);
      setBalls(0);
      if (outs <= 1) {
        setOuts(outs + 1);
      } else setOuts(0);
    } else setStrikes(strikes + 1);
  };

  const addBall = () => {
    if (balls >= 3) {
      setStrikes(0);
      setBalls(0);
    } else setBalls(balls + 1);
  };

  const addFoul = () => {
    if (strikes >= 2) {
      setStrikes(strikes);
    } else setStrikes(strikes + 1);
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };
  const out = () => {
    if (outs >= 2) {
      setOuts(0);
    } else setOuts(outs + 1);
  };
  return (
    <div>
      <div>
        <p data-testid="strikeText">
          Strikes:{strikes}{" "}
          <button data-testid="strikeBtn" onClick={() => addStrike()}>
            Strike
          </button>
        </p>
        <p data-testid="ballText">
          Balls:{balls}{" "}
          <button data-testid="ballBtn" onClick={() => addBall()}>
            Ball
          </button>
        </p>
        <p data-testid="outText">
          Outs:{outs}{" "}
          <button data-testid="outBtn" onClick={() => out()}>
            Out
          </button>
        </p>
        <p>
          Home Team Score:{htRuns} <button onClick={() => htRun()}>Run</button>{" "}
        </p>
        <p>
          Away Team Score:{atRuns} <button onClick={() => atRun()}>Run</button>
        </p>
      </div>
      <div>
        <button data-testid="foulBtn" onClick={() => addFoul()}>
          Foul
        </button>
        <button data-testid="hitBtn" onClick={() => hit()}>
          Hit
        </button>
        <button onClick={() => scoreReset()}>Score Reset</button>
      </div>
    </div>
  );
};

export default AtBatDash;
