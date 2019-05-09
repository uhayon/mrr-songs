import { combineReducers } from 'redux';
import { SONG_SELECTED } from '../constants';

const songsReducer = () => {
  return [
    {
      title: 'Engel',
      artist: 'Rammstein',
      album: {
        name: 'Sehnsucht',
        cover: 'https://s3-eu-west-1.amazonaws.com/s3-helnwein-images-bucket/7377519819696189491/RAW'
      },
      duration: '4:24'
    },
    {
      title: 'Paint it, Black',
      artist: 'The Rolling Stones',
      album: {
        name: 'Aftermath',
        cover: 'https://ring.cdandlp.com/kroun2/photo_grande/114795195.jpg'
      },
      duration: '3:22'
    },
    {
      title: 'Ace of Spades',
      artist: 'Motörhead',
      album: {
        name: 'Ace of Spades',
        cover: 'https://i.pinimg.com/originals/ad/ae/4e/adae4e3338b2e915da32733f1a32b608.jpg'
      },
      duration: '2:45'
    },
    {
      title: 'B.Y.O.B.',
      artist: 'System of a Down',
      album: {
        name: 'Mezmerize',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Jh9Hwr2BL.jpg'
      },
      duration: '4:15'
    },
    {
      title: 'Immigrant Song',
      artist: 'Led Zeppelin',
      album: {
        name: 'Led Zeppelin III',
        cover: 'https://cdn.shopify.com/s/files/1/0397/2773/products/led_zep_III_9fa7d1b7-3e92-4392-af2d-10a36b4fdf81_1200x.png?v=1539843351'
      },
      duration: '2:26'
    }
  ]
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === SONG_SELECTED) {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})