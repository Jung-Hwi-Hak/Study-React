import React, { useEffect, useState } from "react";

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  /**
   * useEffect() Mount! React Hook!
   */
  useEffect(() => {
    console.log("Mount!" + count);
  }, []);

  useEffect(() => {
    console.log("Update!");
  });

  useEffect(() => {
    console.log(`Count Update! ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`text Update! ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Lifecycle;
