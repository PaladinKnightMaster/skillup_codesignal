import { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red"); // Start with red color

  const switchColor = () => {
    const nextColor = color === "red" ? "green" : color === "green" ? "yellow" : "red";
    setColor(nextColor);
  };

  return (
    <div>
      <h1>The traffic light is {color}</h1>
      <button onClick={switchColor}>Change Color</button>
    </div>
  );
}

export default TrafficLight;