const playlist = require('../database/playlist');

const getPlaylist = () => playlist;
const addSongtoPlaylist = (song) => {
  const {id, title, artists, url} = song;
  const totalPlay = 1;
  playlist.push({id, title, artists, url, totalPlay});
};

module.exports = {
  getPlaylist,
  addSongtoPlaylist
};
