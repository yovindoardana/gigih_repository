const express = require('express');
const router = express.Router();

const PlaylistController = require('../controllers/playlist');

router.get('/', PlaylistController.getPlaylist);
router.get('/sorted', PlaylistController.getPlaylistSorted);
// router.post('/', UserController.addSongHandler);
// router.get('/:id', UserController.getSongById);
// router.get('/:id/play', UserController.playSongHandler);

module.exports = router;
