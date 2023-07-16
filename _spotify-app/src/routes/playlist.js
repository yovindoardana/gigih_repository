const express = require('express');
const router = express.Router();

const PlaylistController = require('../controllers/playlist');

router.get('/', PlaylistController.getPlaylist);
router.get('/sorted', PlaylistController.getPlaylistSorted);
router.post('/', PlaylistController.addSongtoPlaylist);
router.delete('/', PlaylistController.deleteSongFromPlaylist);
router.get('/:id', PlaylistController.getPlaylistById);

module.exports = router;
