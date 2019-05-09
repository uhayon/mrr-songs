import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return (<div>Select a song!</div>);
  };

  const { title, artist, album, duration } = song;

  return (
    <div className='ui card'>
      <div className='image'>
        <img src={album.cover} alt={`${album.name} - ${artist}`}/>
      </div>
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='meta'>
          <span>{artist}</span>
        </div>
        <div className='description'>
          <strong>Duration:</strong> {duration}
          <br/>
          <strong>Album:</strong> {album.name}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = ({ selectedSong }) => {
  return { song: selectedSong};
};

export default connect(mapStateToProps)(SongDetail);