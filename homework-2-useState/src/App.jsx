import React, { useState } from "react";
import "./App.css";

function MoodTrackerApp() {
  const [mood, setMood] = useState("Happy");

  const moodOptions = [
    { mood: "Happy", color: "yellow", emoji: "😊" },
    { mood: "Sad", color: "blue", emoji: "😢" },
    { mood: "Excited", color: "orange", emoji: "🤩" },
    { mood: "Relaxed", color: "green", emoji: "😌" },
  ];

  const changeMood = (newMood) => {
    setMood(newMood);
  };

  const currentMood = moodOptions.find((option) => option.mood === mood);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Mood Tracker</h2>
      <div
        style={{
          fontSize: "100px",
          color: currentMood.color,
          transition: "color 0.3s",
        }}
      >
        {currentMood.emoji}
      </div>
      <h3>Current Mood: {mood}</h3>
      <div style={{ marginTop: "20px" }}>
        {moodOptions.map((option) => (
          <button
            key={option.mood}
            onClick={() => changeMood(option.mood)}
            style={{
              padding: "10px 15px",
              fontSize: "16px",
              margin: "5px",
              backgroundColor: option.color,
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {option.mood}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodTrackerApp;
