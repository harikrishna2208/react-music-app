import { useContext } from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";

const UseMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  function PlayTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + 1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    PlayTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    PlayTrack(newIndex);
  }

  return {
    PlayTrack,
    togglePlay,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    playPreviousTrack,
    playNextTrack,
  };
};

export default UseMusicPlayer;
