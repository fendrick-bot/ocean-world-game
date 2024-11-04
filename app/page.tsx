import { GameCanvas } from "@/components/GameCanvas"
export default function Home() {
  return (
    <>
      <h1>This is the main game page</h1>
      <GameCanvas /> {/* This component will render the game canvas */}
    </>
  );
}
