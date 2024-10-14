import React, { Component, createRef } from "react";
//import axios from "axios";

import Volum from "../svg/Volum";
import PlayButton from "../svg/PlayButton";
//import coverImg from "../../images/radio-cover.jpeg"

export default class MobileRadioPlayer extends Component {
  state = {
    isPlaying: false,
    trackTitle: "Resident",
    artist: "Latest Episode",
    duration: "18:00 - 19:00",
    cover: coverImg,
    isLoaded: false,
    hidePlayer: false,
    PlayerText: "Hide player",
    playerHeight: 0,
    playerBottom: { bottom: 0 },
  };
  audioRef = createRef();
  playerRef = createRef();

  togglePlayer = () => {
    if (this.state.hidePlayer) {
      this.setState({
        hidePlayer: false,
        PlayerText: "Hide player",
        playerBottom: { bottom: 0 },
      });
    } else {
      this.setState({
        hidePlayer: true,
        PlayerText: "Show player",
        playerBottom: { bottom: this.state.playerHeight },
      });
    }
  };
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
  startPlaying = () => {
    const getTrack = axios.get(
      "https://api.radioking.io/widget/radio/passion-ibiza-radio1/track/current",
    );
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

  componentDidMount() {
    if (this.playerRef.current) {
      const elementHeight = this.playerRef.current.offsetHeight;
      this.setState({
        playerHeight: "-" + elementHeight + "px",
      });
    }
  }

  render() {
    return (
      <div
        id="mobile-player"
        className="player lg:hidden transition-all fixed left-0 right-0"
        style={this.state.playerBottom}
        data-height={this.state.playerHeight}
      >
        <audio
          src="https://www.radioking.com/play/passion-ibiza-radio1"
          ref={this.audioRef}
          //onCanPlay={this.startPlaying}
          onChange={this.changeTrack}
        />
        <div className="passion-radio">
          <div className="hide-player flex justify-center">
            <div
              className="px-4 pb-1 pt-[0.4rem] mb-[-1px] text-center text-gray font-light uppercase bg-black after:content-[''] after:w-0 after:h-0"
              onClick={this.togglePlayer}
            >
              {this.state.PlayerText}
            </div>
          </div>
          <div
            className="radio-wrap p-5 bg-cover bg-no-repeat flex justify-between items-center gap-4 bg-black"
            ref={this.playerRef}
          >
            <div className="radio-btn flex gap-4 items-center py-1">
              <div
                className="play-btn cursor-pointer"
                onClick={this.togglePlay}
              >
                <PlayButton
                  playing={this.state.isPlaying}
                  bg="#ff0037"
                  ico="#fbfdf5"
                  width="16"
                />
              </div>
            </div>
            <div className="radio-details font-normal min-w-[16vw] flex-1">
              <div className="radio-control flex justify-between items-end">
                <div className="radio-live mb-2">
                  <p className="text-red">LIVE NOW</p>
                </div>
              </div>
              <div className="track-details text-white">
                <p className="track">{this.state.trackTitle}</p>
                <p className="track-details">{this.state.artist}</p>
                <p className="track-time">{this.state.duration}</p>
              </div>
            </div>
            <div className="radio-img">
              <img
                src={this.state.cover}
                className="w-16 h-16 rounded"
                alt="radio cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

