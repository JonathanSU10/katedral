-- Create tables for the church website

-- Users table for admin login
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Announcements table
CREATE TABLE IF NOT EXISTS announcements (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert default admin user (username: admin, password: katedral2025)
-- Note: Password should be hashed in the application
INSERT INTO users (username, password, role) VALUES 
    ('admin', '$2a$10$rVvV1/YPR1pQxVbxBH5p5e8lXJbYQqFV4p9y5z7V9n9v6x7B5p1pO', 'admin')
ON CONFLICT (username) DO NOTHING;