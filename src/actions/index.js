import { SONG_SELECTED } from '../constants';

export const selectSong = song => {
  return {
    type: SONG_SELECTED,
    payload: song
  }
};