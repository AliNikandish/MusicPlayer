import { createContext, useEffect, useRef, useState } from "react";
import {
  MusicPlayerContextProviderProps,
  MusicPlayerContextType,
  musicListType,
} from "../Types/MusicPlayerTypes";
import MusicDatas from "../MusicDatas";

export const MusicPlayerContext = createContext({} as MusicPlayerContextType);

export const MusicPlayerContextProvider = ({
  children,
}: MusicPlayerContextProviderProps) => {

  // => states
  const [index, setIndex] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<string>("0:00");
  const [musicList, setMusicList] = useState<musicListType[]>(MusicDatas);
  const [pause, setPause] = useState<boolean>(false);
  const [isShuffleMode, setIsShuffleMode] = useState(false);
  const [repeatOne, setRepeatOne] = useState(false);

  // => refs
  let playerRef = useRef<HTMLAudioElement | any>(undefined!);
  let timelineRef = useRef<HTMLDivElement>(null!);
  let playheadRef = useRef<HTMLDivElement>(null!);
  let hoverPlayheadRef = useRef<HTMLDivElement | any>(null!);

  useEffect(() => {
    const playerElement: any = playerRef.current;
    const timelineElement: any = timelineRef.current;

    playerElement.addEventListener("timeupdate", timeUpdate, false);
    playerElement.addEventListener("ended", nextSong, true);
    timelineElement.addEventListener("click", changeCurrentTime, false);
    timelineElement.addEventListener("mousemove", hoverTimeLine, false);
    timelineElement.addEventListener("mouseout", resetTimeLine, false);

    return () => {
      playerElement.addEventListener("timeupdate", timeUpdate);
      playerElement.addEventListener("ended", nextSong);
      timelineElement.addEventListener("click", changeCurrentTime);
      timelineElement.addEventListener("mousemove", hoverTimeLine);
      timelineElement.addEventListener("mouseout", resetTimeLine);
    };
  }, []);


  function changeCurrentTime(e: React.MouseEvent) {
    const duration = playerRef.current.duration;
    const playheadWidth = timelineRef.current.offsetWidth;
    const offsetWidht = timelineRef.current.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
    const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

    playheadRef.current.style.width = userClickWidhtInPercent + "%";
    playerRef.current.currentTime = (duration * userClickWidhtInPercent) / 100;
  }
  

  function hoverTimeLine(e: React.MouseEvent) {
    const duration = playerRef.current.duration;
    const playheadWidth = timelineRef.current.offsetWidth;
    const offsetWidht = timelineRef.current.offsetLeft;
    const userClickWidht = e.clientX - offsetWidht;
    const userClickWidhtInPercent = (userClickWidht * 100) / playheadWidth;

    if (userClickWidhtInPercent <= 100) {
      hoverPlayheadRef.current.style.width = userClickWidhtInPercent + "%";
    }

    const time = (duration * userClickWidhtInPercent) / 100;

    if (time >= 0 && time <= duration) {
      hoverPlayheadRef.current.dataset.content = formatTime(time);
    }
  }

  function resetTimeLine() {
    hoverPlayheadRef.current.style.width = 0;
  }

  function timeUpdate() {
    const duration = playerRef.current.duration;
    const playPercent = 100 * (playerRef.current.currentTime / duration);
    playheadRef.current.style.width = playPercent + "%";
    const newcurrentTime = formatTime(parseInt(playerRef.current.currentTime));
    setCurrentTime(newcurrentTime);
  }

  function formatTime(currentTime: number) {
    const minutes = Math.floor(currentTime / 60);
    let seconds: string | number = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + (seconds % 60);

    const formatTime = minutes + ":" + seconds;

    return formatTime;
  }

  function updatePlayer() {
    playerRef.current.load();
    playerRef.current.play();
  }

  function nextSong() {
    if (repeatOne) {
      setIndex((prevIndex) => prevIndex);
    } else {
      if (!isShuffleMode) {
        setIndex((prevIndex) => (prevIndex + 1) % musicList.length);
      } else {
        setRandomIndex();
      }
    }

    updatePlayer();

    if (pause) {
      playerRef.current.play();
    }

    setPause(true);
  }


  function prevSong() {
    if (repeatOne) {
      setIndex((prevIndex) => prevIndex);
    } else {
      if (!isShuffleMode) {
        setIndex(
          (prevIndex) => (prevIndex + musicList.length - 1) % musicList.length
        );
      } else {
        setRandomIndex();
      }
    }

    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
    setPause(true);
  }

  function playOrPause() {

    if (!pause) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setPause((prev) => !prev);
  }

  function clickAudio(key: number) {
    setIndex(key);
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
    setPause(true);
  }

  function shuffleHandler() {
    setIsShuffleMode((prev) => !prev);
  }

  function repeatHandler() {
    setRepeatOne((prev) => !prev);
  }

  function setRandomIndex() {
    let randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber != index) {
      setIndex(randomNumber);
    } else {
      setRandomIndex();
    }
  }

  const currentSong = musicList[index];

  return (
    <MusicPlayerContext.Provider
      value={{
        currentSong,
        index,
        playerRef,
        musicList,
        nextSong,
        playOrPause,
        prevSong,
        clickAudio,
        hoverPlayheadRef,
        playheadRef,
        timelineRef,
        pause,
        setCurrentTime,
        setIndex,
        setPause,
        isShuffleMode,
        shuffleHandler,
        repeatOne,
        repeatHandler,
        currentTime,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};
