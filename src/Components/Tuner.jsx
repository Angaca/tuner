import React, { useState } from "react";

const Tuner = () => {
  const notes = [
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
  ];

  const [strings, setStrings] = useState(["E", "A", "D", "G", "B", "E"]);

  const calcPosition = (string) => {
    return notes.findIndex((note) => note === string);
  };

  const tuneAllStrings = (upOrDown) => {
    const copyOfStrings = [...strings];

    for (let i = 0; i < copyOfStrings.length; i++) {
      copyOfStrings[i] =
        upOrDown === "up"
          ? notes[calcPosition(copyOfStrings[i]) + 1] || notes[0]
          : notes[calcPosition(copyOfStrings[i]) - 1] || notes[11];
    }

    setStrings(copyOfStrings);
  };

  const tuneSingleString = (upOrDown, string, index) => {
    const position = calcPosition(string);
    const copyOfStrings = [...strings];

    copyOfStrings[index] =
      upOrDown === "up"
        ? notes[position + 1] || notes[0]
        : notes[position - 1] || notes[11];

    setStrings(copyOfStrings);
  };

  return (
    <div>
      {strings.map((string, index) => {
        return (
          <ol key={index}>
            {string}
            <button
              onClick={() => {
                tuneSingleString("up", string, index);
              }}
            >
              Tune up!
            </button>
            <button
              onClick={() => {
                tuneSingleString("down", string, index);
              }}
            >
              Tune down!
            </button>
          </ol>
        );
      })}
      <button onClick={() => tuneAllStrings("up")}>Tune all up!</button>
      <button onClick={() => tuneAllStrings("down")}>Tune all down!</button>
    </div>
  );
};

export default Tuner;
