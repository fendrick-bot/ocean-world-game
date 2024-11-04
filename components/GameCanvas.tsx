'use client'
import Experience from "@/Experience/Experience";
export function GameCanvas() {
  return (
    <>
      <br />
      <br />
      <canvas
      className="m-auto min-w-4/5 min-h-4/6 overflow-hidden rounded-lg"
        
        id="gameCanvas"
        ref={(canvas) => {
          if (canvas) {
            const experience = new Experience(canvas);
            console.log(experience + "is ready to play");
            
          }
        }}
        style={{ border: "1px solid black" }}
      ></canvas>
      <br />
    </>
  );
}
