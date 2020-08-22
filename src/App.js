import React from "react";
import Particles from "react-particles-js";
import { MusicPlayerProvider } from "./components/MusicPlayerContext";
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import "./css/index.css";
import "./css/App.css";
/**/
function App() {
  return (
    <>
      <div className="fordiv">
        <Particles className="particle-js" />
      </div>
      <MusicPlayerProvider>
        <div className="container">
          <TrackList />
          <PlayerControls />
        </div>
      </MusicPlayerProvider>
    </>
  );
}

export default App;
