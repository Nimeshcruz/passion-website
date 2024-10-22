import { Component, createRef } from "react";

import Volum from "../svg/Volum";
import PlayButton from "../svg/PlayButton";
import coverImg from "../../images/radio-cover.jpeg";

export default class RadioPlayer extends Component {
  state = {
    isPlaying: false,
    trackTitle: "Resident",
    artist: "Latest Episode",
    duration: "18:00 - 19:00",
    cover: coverImg,
    isLoaded: false,
  };
  audioRef = createRef();
  togglePlay = () => {
    if (this.state.isPlaying) {
      this.audioRef.current.pause();
      this.setState({
        isPlaying: false,
      });
    } else {
      this.audioRef.current.play();
      this.setState({
        isPlaying: true,
      });
    }
  };
  changeVolume = (event) => {
    let vol = event.target.value / 100;
    this.audioRef.current.volume = vol;
  };
  startPlaying = () => {
    const getTrack =
      "https://api.radioking.io/widget/radio/passion-ibiza-radio1/track/current";

    Promise.all([getTrack]).then((res) => {
      let start = new Date(res[0].data.started_at);
      let startTimeFrom =
        start.getHours() < 10 ? "0" + start.getHours() : start.getHours();
      let startTimeTo =
        start.getMinutes() < 10 ? "0" + start.getMinutes() : start.getMinutes();
      let end = new Date(res[0].data.end_at);
      let endTimeFrom =
        end.getHours() < 10 ? "0" + end.getHours() : end.getHours();
      let endTimeTo =
        end.getMinutes() < 10 ? "0" + end.getMinutes() : end.getMinutes();
      this.setState({
        trackTitle: res[0].data.title,
        artist: res[0].data.artist,
        duration:
          startTimeFrom +
          ":" +
          startTimeTo +
          " - " +
          endTimeFrom +
          ":" +
          endTimeTo,
        cover: res[0].data.cover,
        isLoaded: true,
      });
    });
  };
  changeTrack = () => {
    console.log("changed");
  };

  render() {
    return (
      <div className="player max-w-[30vw] hidden lg:block">
        <audio
          src="https://www.radioking.com/play/passion-ibiza-radio1"
          ref={this.audioRef}
          onCanPlay={this.startPlaying}
          onChange={this.changeTrack}
        />
        <div className="passion-radio rounded-lg overflow-hidden bg-[rgba(0,0,0,0.5)] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
          <div className="radio-wrap p-2 bg-cover bg-no-repeat flex justify-between items-center gap-6">
            <div className="radio-btn flex gap-4 items-center py-1">
              <div
                className="play-btn cursor-pointer"
                onClick={this.togglePlay}
              >
                <PlayButton
                  playing={this.state.isPlaying}
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
                  <Volum />
                  <input
                    type="range"
                    className="volume-slider w-20 h-1 block"
                    min="0"
                    max="100"
                    step="10"
                    onChange={this.changeVolume}
                  />
                </div>
              </div>
              <div className="track-details grid grid-col-60-40 text-white">
                <p className="track grid-col-1-2">{this.state.trackTitle}</p>
                <p className="track-details">{this.state.artist}</p>
                <p className="track-time text-right">{this.state.duration}</p>
              </div>
            </div>
            <div className="radio-img">
              <img
                src={this.state.cover}
                className="w-12 h-12 rounded"
                alt="radio cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
