const express = require('express');
const router = express.Router();
const {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement
} = require('../controllers/announcementController');
const auth = require('../middleware/auth');

// @route   GET /api/announcements
// @desc    Get all announcements
// @access  Public
router.get('/', getAllAnnouncements);

// @route   GET /api/announcements/:id
// @desc    Get announcement by ID
// @access  Public
router.get('/:id', getAnnouncementById);

// @route   POST /api/announcements
// @desc    Create an announcement
// @access  Private
router.post('/', auth, createAnnouncement);

// @route   PUT /api/announcements/:id
// @desc    Update an announcement
// @access  Private
router.put('/:id', auth, updateAnnouncement);

// @route   DELETE /api/announcements/:id
// @desc    Delete an announcement
// @access  Private
router.delete('/:id', auth, deleteAnnouncement);

module.exports = router;