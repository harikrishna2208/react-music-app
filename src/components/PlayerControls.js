import React from "react";
import useMusicPlayer from "./UseMusicPlayer";
import { BsPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { BsFillSkipEndFill } from "react-icons/bs";
import { BsFillSkipStartFill } from "react-icons/bs";

function PlayerControls() {
  const {
    togglePlay,
    currentTrackName,
    isPlaying,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  return (
    <>
      <div className="box controls has-background-grey-dark">
        <div className="current-track has-text-light">
          <div>{currentTrackName}</div>
        </div>
        <div>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playPreviousTrack}
            disabled={!currentTrackName}
          >
            <BsFillSkipStartFill />
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={togglePlay}
            disabled={!currentTrackName}
          >
            {isPlaying ? <BsFillPauseFill /> : <BsPlayFill />}
          </button>
          <button
            className="button has-text-light has-background-grey-dark"
            onClick={playNextTrack}
            disabled={!currentTrackName}
          >
            <BsFillSkipEndFill />
          </button>
        </div>
      </div>
    </>
  );
}
export default PlayerControls;
