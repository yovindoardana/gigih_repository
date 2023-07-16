const songs = require('../database/songs');
const playlist = require('../database/playlist');
const songsModel = require('../models/songs');
const playlistModel = require('../models/playlist');

// GET ALL SONGS HANDLER
const getAllSongs = (req, res) => {
  res.status(200).json({status: 'success', data: {songs: songsModel.getAllSongs()}});
};

// GET SONG BY ID HANDLER
const getSongById = (req, res) => {
  const songId = req.params.id;
  const song = songsModel.getSongById(songId);

  if (!song) {
    return res.status(404).json({status: 'error', message: 'Song not found'});
  }

  res.status(200).json({status: 'success', data: {song: song}});
};

// ADD SONG HANDLER
const addSongHandler = (req, res) => {
  const {id, title, artists, url} = req.body;

  if (!id || !title || !artists || !url) {
    return res.status(400).json({status: 'error', message: 'Please provide all required fields'});
  }

  const songExists = songs.some((song) => song.id === id);

  if (songExists) {
    return res.status(400).json({status: 'error', message: 'Song already exists'});
  }

  const isAdded = songsModel.addSong(id, title, artists, url);

  if (!isAdded) {
    return res.status(404).json({status: 'error', message: 'Add Song Failed!'});
  }

  return res.status(201).json({status: 'success', data: req.body});
};

// PLAY SONG HANDLER
const playSongHandler = (req, res) => {
  const songId = req.params.id;
  const song = songsModel.getSongById(songId);

  if (!song) {
    return res.status(404).json({
      status: 'error',
      message: 'Song not found'
    });
  }

  const playlist = playlistModel.getPlaylist();
  const isSongInPlaylist = playlist.some((song) => song.id == songId);

  if (isSongInPlaylist) {
    isSongInPlaylist.totalPlay += 1;
  } else {
    playlistModel.addSongtoPlaylist(song);
  }

  res.status(200).json({
    status: 'success',
    isPlaying: {
      title: song.title,
      artist: song.artists,
      url: song.url
    }
  });
};

// DELETE SONG HANDLER
const deleteSongHandler = (req, res) => {
  const songId = req.params.id;
  const song = songsModel.getSongById(songId);

  if (!song) {
    return res.status(404).json({status: 'error', message: 'Song not found'});
  }

  songsModel.deleteSong(songId);
  res.status(200).json({status: 'success', message: 'Song deleted'});
};

// UPDATE SONG HANDLER
const updateSongHandler = (req, res) => {
  const songId = req.params.id;
  const song = songsModel.getSongById(songId);

  if (!song) {
    return res.status(404).json({status: 'error', message: 'Song not found'});
  }

  songsModel.updateSong(songId, req.body);
  res.status(200).json({status: 'success', message: 'Song updated'});
};

module.exports = {getAllSongs, getSongById, addSongHandler, playSongHandler, deleteSongHandler, updateSongHandler};
