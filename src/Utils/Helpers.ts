import { musicListType } from "../Types/MusicPlayerTypes";

export function tottalMinute(musicList: musicListType[]) {
  let tottal = 0;
  musicList.map((music: musicListType) => {
    tottal += music.duration;
  });

  return Math.ceil(tottal / 60);
}

export function durationFormatter(duration: number) {
  const min = Math.floor(duration / 60);
  const sec = duration % 60;

  return { min, sec };
}
