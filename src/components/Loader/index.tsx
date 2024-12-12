import { useState, useEffect } from 'react';
import Player from "lottie-react";
import animationData from "../../assets/loader.json";
import './style.css';

const lines = [
    "Analysing your reports",
    "Reviewing your profile",
    "Consulting our doctors",
    "Preparing your trends"
  ];

const Loader = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedLines((prevLines) => {
        const nextIndex = prevLines.length;
        if (nextIndex < lines.length) {
          return [...prevLines, lines[nextIndex]];
        } else {
          clearInterval(timer);
          return prevLines;
        }
      });
    }, 1000); // Adjust the delay as needed (2000ms = 2 seconds)
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-container">
      <Player
        autoplay
        loop
        animationData={animationData}
        style={{ height: "150px", width: "150px" }}
      />
      <div className="loading-text-container">
        {displayedLines.map((line, index) => (
          <h3 key={index}>{line}</h3>
        ))}
      </div>
    </div>
  );
}

export default Loader;