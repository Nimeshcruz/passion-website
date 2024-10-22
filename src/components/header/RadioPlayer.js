import { useRadioPlayer } from "@src/utils/hooks/useRadioPlayer";
import RadioPlayerUI from "./RadioPlayerUI";

export default function RadioPlayer() {
  const { playerState, audioRef, togglePlay, startPlaying } = useRadioPlayer();

  return (
    <div>
      <RadioPlayerUI
        playerState={playerState}
        audioRef={audioRef}
        togglePlay={togglePlay}
        startPlaying={startPlaying}
      />
    </div>
  );
}
