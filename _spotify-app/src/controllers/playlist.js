const playlistModel = require('../models/playlist');
const songsModel = require('../models/songs');

const getPlaylist = (req, res) => {
  res.status(200).json({status: 'success', data: {playlist: playlistModel.getPlaylist()}});
};

const getPlaylistById = (req, res) => {
  const songId = req.params.id;
  const song = playlistModel.getPlaylistById(songId);
  if (!song) {
    return res.status(404).json({status: 'error', message: 'Song is not in Playlist'});
  }
  res.status(200).json({status: 'success', data: {song: song}});
};

const getPlaylistSorted = (req, res) => {
  const playlist = playlistModel.getPlaylist();
  const sortedPlaylist = [...playlist].sort((a, b) => b.totalPlay - a.totalPlay);
  res.status(200).json({status: 'success', data: {playlist: sortedPlaylist}});
};

const addSongtoPlaylist = (req, res) => {
  const {id, title, artists, url} = req.body;

  const isSongInPlaylist = playlistModel.getPlaylist().some((song) => song.id == id);

  if (isSongInPlaylist) {
    return res.status(400).json({status: 'error', message: 'Song already in playlist'});
  }

  const isSongExists = songsModel.getSongById(id);

  if (!isSongExists) {
    return res.status(404).json({status: 'error', message: 'Song not found'});
  }

  playlistModel.addSongtoPlaylist({id, title, artists, url, totalPlay: 0});

  return res.status(200).json({status: 'success', message: 'Song added to playlist'});
};

const deleteSongFromPlaylist = (req, res) => {
  const songId = req.params.id;
  const playlist = playlistModel.getPlaylist();
  const song = playlist.find((song) => song.id == songId);
  playlistModel.deleteSongFromPlaylist(songId);

  res.status(200).json({status: 'success', message: 'Song deleted from playlist'});
};

module.exports = {getPlaylist, getPlaylistSorted, addSongtoPlaylist, deleteSongFromPlaylist, getPlaylistById};
