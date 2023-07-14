const express = require('express');
const router = express.Router();

const UserController = require('../controllers/songs');

router.get('/', UserController.getAllSongs);
router.post('/', UserController.addSongHandler);
router.get('/:id', UserController.getSongById);
router.get('/:id/play', UserController.playSongHandler);

module.exports = router;
