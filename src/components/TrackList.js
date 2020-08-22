import React from "react";
import UseMusicplayer from "./UseMusicPlayer";
import { BsPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

function TrackList() {
  const {
    trackList,
    currentTrackName,
    PlayTrack,
    isPlaying,
  } = UseMusicplayer();
  return (
    <>
      {trackList.map((track, index) => (
        <div className="box">
          <button className="button" onClick={() => PlayTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <BsFillPauseFill />
            ) : (
              <BsPlayFill />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </>
  );
}
export default TrackList;
