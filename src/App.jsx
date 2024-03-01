import "./App.css";
import PresentationPersos from "./components/PresentationPersos";
import CreationPerso from "./components/CreationPerso";
import Creation2 from "./components/Creation2";

export default function App() {
  return (
    <main>

      <h1>Resident Evil Remake</h1>
      <PresentationPersos />
      <div className="creons">
        <CreationPerso />
        <Creation2 />
      </div>
    </main>
      )
}