import React from 'react';
import { connect } from 'react-redux';

const SongList = (props) => {
  const listOfSongs = props.songs.map((song) => {
    return (
      <div key={song.title}>
        <h1>{song.title}</h1>
        <p>{song.duration}</p>
      </div>
    );
  });

  return <>{listOfSongs}</>;
};

const mapStateToProps = (state) => {
  //Always returns an object (Key : Value Pair)
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);

//the returned object from the mapstatetoprops function is an object with a key value pair
//the key name is the prop name inside our component
 
