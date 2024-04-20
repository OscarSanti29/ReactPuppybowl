import { BrowserRouter, Route, Routes } from "react-router-dom";
import Newplayerform from "./components/NewPlayerForm";
import Singleplayer from "./components/SinglePlayer";
import Allplayers from "./components/AllPlayers";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Allplayers />}></Route>
          <Route path="/players/:id" element={<Singleplayer />}></Route>
          <Route path="/newplayerform" element={<Newplayerform />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
