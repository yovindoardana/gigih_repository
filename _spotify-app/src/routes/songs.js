const express = require('express');
const router = express.Router();

const SongController = require('../controllers/songs');

// GET ALL SONGS
router.get('/', SongController.getAllSongs);

// ADD SONG
router.post('/', SongController.addSongHandler);

// GET SONG BY ID
router.get('/:id', SongController.getSongById);

// PLAY SONG
router.get('/:id/play', SongController.playSongHandler);

// DELETE SONG
router.delete('/:id', SongController.deleteSongHandler);

// UPDATE SONG
router.put('/:id', SongController.updateSongHandler);

module.exports = router;
