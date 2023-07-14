const playlist = require('../database/playlist');

const getPlaylist = (req, res) => {
  res.status(200).json(playlist);
};

const getPlaylistSorted = (req, res) => {
  const sortedPlaylist = playlist.sort((a, b) => b.totalPlay - a.totalPlay);
  res.status(200).json(sortedPlaylist);
};

module.exports = {getPlaylist, getPlaylistSorted};
