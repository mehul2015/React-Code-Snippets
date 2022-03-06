import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = ({ songs, selectSong }) => {
  const listOfSongs = songs.map((song) => {
    return (
      <div key={song.title} className='item'>
        <div className='right floated content'>
          <button
            className='ui button primary'
            onClick={() => selectSong(song)}
          >
            Select
          </button>
        </div>
        <div className='content'>{song.title}</div>
      </div>
    );
  });

  return <div className='ui divided list'>{listOfSongs}</div>;
};

const mapStateToProps = (state) => {
  //Always returns an object (Key : Value Pair)
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps, {
  selectSong,
})(SongList);

//the returned object from the mapstatetoprops function is an object with a key value pair
//the key name is the prop name inside our component
