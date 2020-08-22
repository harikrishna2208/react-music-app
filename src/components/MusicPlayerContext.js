import React, { useState } from "react";
import creativeminds from "../assets/creativeminds.mp3";
import happyrock from "../assets/happyrock.mp3";
import littleidea from "../assets/littleidea.mp3";
const MusicPlayerContext = React.createContext([{}, () => {}]);
const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: "creativeminds",
        file: creativeminds,
      },
      {
        name: "happyrock",
        file: happyrock,
      },
      {
        name: "littleidea",
        file: littleidea,
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};
export { MusicPlayerContext, MusicPlayerProvider };
