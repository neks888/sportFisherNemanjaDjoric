import React, { useState } from "react";
import "./App.css";

function App() {
  const [scoreBoard, setScoreBoard] = useState([]);
  const [home, setHome] = useState("");
  const [away, setAway] = useState("");
  const [inProgress, setInProgress] = useState(false);
  const [scoreHome, setScoreHome] = useState(0);
  const [scoreAway, setScoreAway] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [newHomeScore, setNewHomeScore] = useState(0);
  const [newAwayScore, setNewAwayScore] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newPair = {
      id: Math.random(),
      home,
      away,
      date: new Date().getTime().toString(),
      scoreHome,
      scoreAway,
      inProgress: true,
    };
    setScoreBoard([...scoreBoard, newPair]);
    setHome("");
    setAway("");
  };

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
  console.log(scoreHome, scoreAway);
  return (
    <React.Fragment>
      <form className="form-group grocery-form" onSubmit={handleSubmit}>
        <h3>Score</h3>
        <div>
          <label htmlFor="start">Home team:</label>
          <input
            type="text"
            className="form-control mb-2 grocery"
            placeholder="Home team"
            value={home}
            onChange={(e) => setHome(e.target.value)}
          />

          <label htmlFor="start">Away team:</label>
          <input
            type="text"
            className="form-control mb-2 grocery"
            placeholder="Away Team"
            value={away}
            onChange={(e) => setAway(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            Create
          </button>
        </div>
      </form>

      {scoreBoard.length > 0 &&
        scoreBoard.map(({ home, away, scoreHome, scoreAway, date, id }) => {
          return (
            <div key={id}>
              <span>{home}</span>
              {isEditing ? (
                <input
                  type="number"
                  className="form-control mb-2 grocery"
                  value={newHomeScore}
                  onChange={(e) => setNewHomeScore(e.target.value)}
                />
              ) : (
                <span>{scoreHome}</span>
              )}

              {"   "}
              <span>{away}</span>
              {isEditing ? (
                <input
                  type="number"
                  className="form-control mb-2 grocery"
                  value={newAwayScore}
                  onChange={(e) => setNewAwayScore(e.target.value)}
                />
              ) : (
                <span>{scoreAway}</span>
              )}
              <button onClick={() => editScore(id)}>
                {isEditing ? "Set" : "Edit Score"}
              </button>
            </div>
          );
        })}
    </React.Fragment>
  );
}

export default App;
