const songs = require('../database/songs');

const getAllSongs = () => songs;
const getSongById = (id) => songs.find((song) => song.id == id);
const addSong = (id, title, artists, url) => songs.push({id, title, artists, url});
const deleteSong = (id) => {
  songs.map((song) => {
    if (song.id == id) {
      songs.splice(songs.indexOf(song), 1);
    }
  });
};

const updateSong = (songId, {title, artists, url}) => {
  songs.map((song) => {
    if (song.id == songId) {
      song.title = title;
      song.artists = artists;
      song.url = url;
    }
  });
};

module.exports = {getAllSongs, getSongById, addSong, deleteSong, updateSong};
