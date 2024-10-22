import { useState, useRef, useEffect } from "react";

export const useRadioPlayer = () => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    trackTitle: "Loading...",
    artist: "Please wait",
    duration: "--:-- - --:--",
    cover: "",
    isLoaded: false,
  });

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (playerState.isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setPlayerState((prevState) => ({
        ...prevState,
        isPlaying: !prevState.isPlaying,
      }));
    }
  };

  const startPlaying = async () => {
    try {
      const res = await fetch(
        "https://api.radioking.io/widget/radio/passion-ibiza-radio1/track/current",
      );

      const data = await res.json();

      const start = new Date(data?.started_at);
      const end = new Date(data?.end_at);

      const duration = (startDuration, endDuration) => {
        const startDate = new Date(startDuration);
        const endDate = new Date(endDuration);

        const totalDuration = endDate - startDate;
        const totalMinutes = Math.floor(totalDuration / 6000);
        const hourDiff = Math.floor(totalMinutes / 60);
        const minuteDiff = totalMinutes % 60;

        return `0:00 - ${hourDiff}:${minuteDiff}`;
      };

      setPlayerState((prevState) => ({
        ...prevState,
        trackTitle: data?.title,
        artist: data?.artist,
        duration: duration(start, end),
        cover: data?.cover || prevState.cover,
        isLoaded: true,
      }));
    } catch (error) {
      console.error("Error fetching track info:", error);
      setPlayerState((prevState) => ({
        ...prevState,
        trackTitle: "Error loading track",
        artist: "Please try again later",
        isLoaded: true,
      }));
    }
  };

  useEffect(() => {
    const fetchTrackInfo = () => {
      startPlaying();
    };

    fetchTrackInfo();
    const intervalId = setInterval(fetchTrackInfo, 30000); // Update every 30 seconds

    return () => clearInterval(intervalId);
  }, []);

  return {
    playerState,
    audioRef,
    togglePlay,
    startPlaying,
  };
};
