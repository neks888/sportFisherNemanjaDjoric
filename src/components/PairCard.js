import React, { useState } from "react";

function PairCard({ finishTheGame, pair, setScoreBoard, scoreBoard }) {
  const [newHomeScore, setNewHomeScore] = useState(0);
  const [newAwayScore, setNewAwayScore] = useState(0);
  //   const [inProgress, setInProgress] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const { home, away, scoreHome, scoreAway, id, inProgress } = pair;

  const editScore = (editId) => {
    setIsEditing(!isEditing);
    setScoreBoard(
      scoreBoard.map((p) => {
        if (p.id === +editId) {
          return { ...p, scoreHome: newHomeScore, scoreAway: newAwayScore };
        }
        return p;
      })
    );
  };

  const output = inProgress ? (
    <div key={id} style={{ display: "flex", justifyContent: "space-around" }}>
      <span>{home}</span> - <span>{away}</span>:{" "}
      {isEditing ? (
        <input
          min="0"
          placeholder="Enter home value"
          type="number"
          className="form-control mb-2 ml-2 grocery"
          value={newHomeScore}
          onChange={(e) => setNewHomeScore(e.target.value)}
        />
      ) : (
        <span>{scoreHome}</span>
      )}
      {"  - "}
      {isEditing ? (
        <input
          min={0}
          placeholder="Enter away Value"
          type="number"
          className="form-control mb-2 ml-2  grocery"
          value={newAwayScore}
          onChange={(e) => setNewAwayScore(e.target.value)}
        />
      ) : (
        <span>{scoreAway}</span>
      )}
      <div style={{ display: "flex" }}>
        <button className="btn btn-info" onClick={() => editScore(id)}>
          {isEditing ? "Set" : "Edit Score"}
        </button>
        <button className="btn btn-danger " onClick={() => finishTheGame(id)}>
          Finish game
        </button>
      </div>
    </div>
  ) : (
    <div>
      <span>{home}</span> <span>{scoreHome}</span> - <span>{away}</span>
      <span>{scoreAway}</span>
    </div>
  );

  return output;
}

export default PairCard;
