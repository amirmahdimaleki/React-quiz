import HelloAPS from "./components/HelloAPS";
import { Logo } from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import BestPokemon from "./components/BestPokemon";
import Power from "./components/Power";

const abilities = ["Anticipation", "Adaptability", "Run-Away"];
const date = new Date().toLocaleDateString();

function App() {
  const familyName = "maleki";
  return (
    <div>
      <Logo familyName={familyName} id={5} age={17} appName={Pokedex} />
      <BestPokemon ability={abilities}/>
      <CaughtPokemon date={date} />
      <HelloAPS />
      <Power number={2} />
    </div>
  );
}

export default App;
