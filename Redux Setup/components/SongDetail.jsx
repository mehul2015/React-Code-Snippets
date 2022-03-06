import React from 'react';
import { connect } from 'react-redux';

function SongDetail({ selectedSong }) {
  return (
    <div>
      <h1>{selectedSong !== null && selectedSong.title}</h1>
      <h3>{selectedSong !== null && selectedSong.duration}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
