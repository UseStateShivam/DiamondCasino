'use client'

import { useEffect, useRef, useState } from "react";
import { BallManager } from "@/games/plinko/classes/BallManager";
import axios from "axios";

const Game = () => {
  const [ballManager, setBallManager] = useState<BallManager>();
  const canvasRef = useRef<any>();

  useEffect(() => {
    if (canvasRef.current) {
      const ballManager = new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setBallManager(ballManager);
    }
  }, [canvasRef]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center">
      <canvas ref={canvasRef} width="800" height="800"></canvas>
      <button
        className="px-10 mb-4"
        onClick={async () => {
          const response = await axios.post(`http://localhost:8800/game`, {
            data: 1,
          });
          if (ballManager) {
            ballManager.addBall(response.data.point);
          }
        }}
      >
        Add ball
      </button>
    </div>
  );
}

export default Game;