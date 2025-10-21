const db = require('../config/db');

class Announcement {
  // Get all announcements
  static async findAll() {
    const query = 'SELECT * FROM announcements ORDER BY created_at DESC';
    const result = await db.query(query);
    return result.rows;
  }

  // Get announcement by ID
  static async findById(id) {
    const query = 'SELECT * FROM announcements WHERE id = $1';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  // Create a new announcement
  static async create(title, content, authorId) {
    const query = 'INSERT INTO announcements (title, content, author_id) VALUES ($1, $2, $3) RETURNING *';
    const result = await db.query(query, [title, content, authorId]);
    return result.rows[0];
  }

  // Update an announcement
  static async update(id, title, content) {
    const query = 'UPDATE announcements SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *';
    const result = await db.query(query, [title, content, id]);
    return result.rows[0];
  }

  // Delete an announcement
  static async delete(id) {
    const query = 'DELETE FROM announcements WHERE id = $1 RETURNING *';
    const result = await db.query(query, [id]);
    return result.rows[0];
  }
}

module.exports = Announcement;