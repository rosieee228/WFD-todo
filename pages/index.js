
import { useState } from "react";

export default function Home() {
  const [accent, setAccent] = useState("us");  // default 미국 발음
  const accents = ["us", "uk", "aus", "in"];
  const sentences = [
    "This is the first sentence.",
    "This is the second sentence.",
    // ... 331개의 문장 추가
  ];

  return (
    <div>
      <h1>Welcome to the WFD Platform</h1>
      <select onChange={(e) => setAccent(e.target.value)} value={accent}>
        {accents.map((accent) => (
          <option key={accent} value={accent}>
            {accent.toUpperCase()}
          </option>
        ))}
      </select>
      <ul>
        {sentences.map((sentence, index) => (
          <li key={index}>{sentence}</li>
        ))}
      </ul>
    </div>
  );
}
