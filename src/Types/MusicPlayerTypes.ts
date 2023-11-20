export type MusicPlayerContextProviderProps = {
  children: React.ReactNode;
};

export type musicListType = {
  name: string;
  author: string;
  img: string;
  audio: string;
  duration: number;
};

export type MusicItemProps = {
  name: string;
  author: string;
  duration: number;
  index: number;
};

export type MusicPlayerContextType = {
  index: number;
  currentSong: any;
  musicList: musicListType[];
  nextSong: () => void;
  prevSong: () => void;
  playOrPause: () => void;
  clickAudio: (key: any) => void;
  timelineRef: any;
  playheadRef: any;
  playerRef: any;
  hoverPlayheadRef: any;
  pause: boolean;
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  isShuffleMode: boolean;
  shuffleHandler: () => void;
  repeatOne: boolean;
  repeatHandler: () => void;
  currentTime:string
};
