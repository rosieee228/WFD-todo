import React, { useEffect, useState } from "react";

const voices = [
  { name: 'US Male', language: 'en-US', gender: 'male' },
  { name: 'US Female', language: 'en-US', gender: 'female' },
  { name: 'UK Male', language: 'en-GB', gender: 'male' },
  { name: 'UK Female', language: 'en-GB', gender: 'female' },
  { name: 'AU Male', language: 'en-AU', gender: 'male' },
  { name: 'AU Female', language: 'en-AU', gender: 'female' },
  { name: 'IN Male', language: 'en-IN', gender: 'male' },
  { name: 'IN Female', language: 'en-IN', gender: 'female' }
];

function AudioPlayer({ text }) {
  const [voice, setVoice] = useState(null);

  useEffect(() => {
    // 페이지 로드 시 랜덤 발음 선택
    const randomVoice = voices[Math.floor(Math.random() * voices.length)];
    setVoice(randomVoice);
  }, []);

  function playTextToSpeech() {
    if (voice) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voicesList = speechSynthesis.getVoices();
      utterance.voice = voicesList.find(v => v.lang === voice.language && v.name === voice.name);
      speechSynthesis.speak(utterance);
    }
  }

  return (
    <div>
      <button onClick={playTextToSpeech}>
        <i className="fa fa-volume-up"></i> Play
      </button>
    </div>
  );
}

export default AudioPlayer;
