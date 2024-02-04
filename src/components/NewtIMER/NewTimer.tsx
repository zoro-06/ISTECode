import { useEffect, useState } from "react";

export default function App() {
  const [loadingPercent, setloadingPercent] = useState(0);
  const [dot, setDot] = useState(0);
  const [text, setText] = useState("00");

  useEffect(() => {
    setInterval(() => {
      const secs = new Date().getSeconds();

      const currentLoadingPercent = 440 - 440 * (secs / 60);
      setloadingPercent(currentLoadingPercent);

      const currentDot = 360 * (secs / 60);
      setDot(currentDot);

      setText(secs >= 10 ? secs : `0${secs}`);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="text">{text}</div>
        <div style={{ transform: `rotate(${dot}deg)` }} className="dot"></div>
        <svg>
          <circle cx="10" cy="10" r="10" />
          <circle strokeDashoffset={loadingPercent} cx="10" cy="10" r="10" />
        </svg>
      </div>
    </div>
  );
}
