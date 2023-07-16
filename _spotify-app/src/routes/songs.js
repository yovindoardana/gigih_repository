const express = require('express');
const router = express.Router();

const SongController = require('../controllers/songs');

// GET ALL SONGS
router.get('/', SongController.getAllSongsHandler);

// ADD SONG
router.post('/', SongController.addSongHandler);

// GET SONG BY ID
router.get('/:id', SongController.getSongByIdHandler);

// PLAY SONG
router.get('/:id/play', SongController.playSongHandler);

// DELETE SONG
router.delete('/:id', SongController.deleteSongHandler);

// UPDATE SONG
router.put('/:id', SongController.updateSongHandler);

module.exports = router;
