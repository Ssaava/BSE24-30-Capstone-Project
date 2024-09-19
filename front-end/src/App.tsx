import Home, { Add } from "./pages/home.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Home />
      <Add a={2} b={4} />
      <Add a={1} b={4} />
      <Add a={0} b={4} />
      <Add a={9} b={4} />
      <Add a={6} b={4} />
    </>
  );
}

export default App;
