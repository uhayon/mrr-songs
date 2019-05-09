import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongItem = ({ song, selectSong }) => {
  const { title, artist, album } = song;
  return (
    <div className='item'>
      <img className='ui image small' src={album.cover} alt={`${album.name} ${artist}`} />
      <div className='middle aligned content'>
        <div className='header'>{title}</div>
        {artist}
        <div className='description'>{album.name}</div>
      </div>
      <div className='right floated content'>
        <button onClick={() => selectSong(song)} className='ui button primary'>Select</button>
      </div>
    </div>
  )
};

const mapDispatchToProps = { selectSong };

export default connect(null, mapDispatchToProps)(SongItem);