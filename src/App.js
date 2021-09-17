import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😥": "sad",
  "😔": "pensive ",
  "😟": "worried",

  "💔": "Broken Heart",
  "💓": "Beating Heart",
  "😛": "Face with Tongue",
  "😬": "Grimacing Face",
  "😪": "Sleepy Face",
  "😵": "Dizzy Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1 class="heading">Emoji simplifier</h1>

      <input
        placeholder="              put emoji using keywoard."
        style={{ padding: "0.5rem", backgroundColor: "#DDD6FE", width: "20%" }}
        onChange={emojiInputHandler}
      />

      <h1 class="meaning"> {meaning} </h1>
      <h3 class="data">emoji's available : </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
