import { useState } from "react";

function MouseTracker({ render }) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  function handleMouseMove(e) {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <div onMouseMove={handleMouseMove} className="h-screen w-full">
      {render(position)}
    </div>
  );
}

export default MouseTracker;
