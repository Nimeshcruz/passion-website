import PlayButton from "../svg/PlayButton";
import Volume from "../svg/Volume";
import Image from "next/image";

export default function RadioPlayerUI({
  playerState,
  audioRef,
  togglePlay,
  startPlaying,
}) {
  return (
    <div className="player max-w-[30vw] hidden lg:block">
      <audio
        src="https://www.radioking.com/play/passion-ibiza-radio1"
        ref={audioRef}
        onCanPlay={startPlaying}
      />
      <div className="passion-radio rounded-lg overflow-hidden bg-[rgba(0,0,0,0.5)] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <div className="radio-wrap p-2 bg-cover bg-no-repeat flex justify-between items-center gap-6">
          <div className="radio-btn flex gap-4 items-center py-1">
            <div className="play-btn cursor-pointer" onClick={togglePlay}>
              <PlayButton
                playing={playerState.isPlaying}
                bg="#ff0037"
                ico="#fbfdf5"
                width="12"
              />
            </div>
          </div>
          <div className="radio-details font-normal min-w-[16vw] flex-1">
            <div className="radio-control flex justify-between items-end">
              <div className="radio-live">
                <p className="text-red">LIVE NOW</p>
              </div>
              <div className="volume flex items-center gap-2">
                <Volume />
                <input
                  type="range"
                  className="volume-slider w-20 h-1 block"
                  min="0"
                  max="100"
                  step="10"
                />
              </div>
            </div>
            <div className="track-details grid grid-col-60-40 text-white">
              <p className="track grid-col-1-2">{playerState.trackTitle}</p>
              <p className="track-details">{playerState.artist}</p>
              <p className="track-time text-right">{playerState.duration}</p>
            </div>
          </div>
          <div className="radio-img">
            <img
              src={playerState.cover}
              width={48}
              height={48}
              className="w-12 h-12 rounded"
              alt="radio cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
