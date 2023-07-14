const songs = require('../database/songs');
const playlist = require('../database/playlist');

const getAllSongs = (req, res) => {
  const songList = songs.map((song) => ({
    title: song.title,
    artists: song.artists,
    url: song.url
  }));
  res.status(200);
  res.json(songList);
};

const getSongById = (req, res) => {
  const {id} = req.params;
  let song = songs.find((song) => song.id == id);

  if (song) {
    res.status(200).json(song);
  } else {
    res.status(404).json({error: 'Song not found'});
  }
};

const addSongHandler = (req, res) => {
  const {id, title, artists, url} = req.body;
  const newSong = {
    id,
    title,
    artists,
    url
  };
  songs.push(newSong);
  res.status(201);
  res.json(req.body);
};

const playSongHandler = (req, res) => {
  const {id} = req.params;
  const song = songs.find((song) => song.id == id);

  const alreadyPlaylist = playlist.find((song) => song.id == id);
  console.log(playlist);
  if (alreadyPlaylist) {
    alreadyPlaylist.totalPlay += 1;
  } else {
    song.totalPlay += 1;
    playlist.push(song);
  }

  if (song) {
    res.status(200).json({
      isPlaying: {
        title: song.title,
        artist: song.artists
      }
    });
  } else {
    res.status(404).json({
      message: 'Song not found'
    });
  }
};

module.exports = {getAllSongs, getSongById, addSongHandler, playSongHandler};
