import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: 'Lose Yourself', duration: '5:21'},
        {title: 'Stan', duration: '5:10'},
        {title: 'Here Comes the Sun', duration: '3:55'},
        {title: 'Gucci Gang', duration: '2:14'}
    ];
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    } 

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})