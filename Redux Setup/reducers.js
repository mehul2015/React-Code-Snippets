import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Hello',
      duration: '4:00',
    },
    { title: 'Hello 2', duration: '4:05' },
    { title: 'Hello 3', duration: '4:10' },
  ];
};

const songSelectedReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return selectedSong.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: songSelectedReducer,
});
