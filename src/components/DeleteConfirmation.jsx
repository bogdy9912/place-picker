import { useEffect, useState } from "react";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [remainingTime, setRemainingTime] = useState(TIMER);

  useEffect(() => {
    const ref = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);
    return () => {
      clearInterval(ref);
    };
  }, []);

  useEffect(() => {
    const ref = setTimeout(() => {
      onConfirm();
    }, 3 * 1000);

    return () => {
      clearTimeout(ref);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remainingTime} max={TIMER} />
    </div>
  );
}
