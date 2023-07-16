const playlist = require('../database/playlist');

const getPlaylist = () => playlist;

const getPlaylistById = (id) => playlist.find((song) => song.id == id);

const addSongtoPlaylist = (song) => {
  const {id, title, artists, url, totalPlay} = song;
  playlist.push({id, title, artists, url, totalPlay});
};

const deleteSongFromPlaylist = (songId) => {
  const index = playlist.findIndex((song) => song.id == songId);
  playlist.splice(index, 1);
};

module.exports = {
  getPlaylist,
  addSongtoPlaylist,
  deleteSongFromPlaylist,
  getPlaylistById
};
