import { useEffect, useState } from "react";

const ProgressBar = ({ timer }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const ref = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(ref);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
};

export default ProgressBar;
