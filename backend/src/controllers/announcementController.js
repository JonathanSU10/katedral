const Announcement = require('../models/Announcement');

// Get all announcements
const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.findAll();
    res.json(announcements);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get announcement by ID
const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ msg: 'Announcement not found' });
    }
    res.json(announcement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Create announcement
const createAnnouncement = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newAnnouncement = await Announcement.create(title, content, req.user.id);
    res.json(newAnnouncement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update announcement
const updateAnnouncement = async (req, res) => {
  const { title, content } = req.body;

  try {
    let announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ msg: 'Announcement not found' });
    }

    // Check if user is authorized to update
    if (announcement.author_id !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    announcement = await Announcement.update(req.params.id, title, content);
    res.json(announcement);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete announcement
const deleteAnnouncement = async (req, res) => {
  try {
    let announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ msg: 'Announcement not found' });
    }

    // Check if user is authorized to delete
    if (announcement.author_id !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Announcement.delete(req.params.id);
    res.json({ msg: 'Announcement removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement
};