import React from 'react';
import { connect } from 'react-redux';

import SongItem from './SongItem';

class SongList extends React.Component {
  render() {
    return (
      <div className='ui divided list'>
        {
          this.props.songs.map(song => <SongItem key={song.title} song={song} />)
        }
      </div>
    );
  }
};

const mapStateToProps = ({ songs }) => {
  return { songs };
}

export default connect(mapStateToProps)(SongList);