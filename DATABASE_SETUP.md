# PostgreSQL Database Setup

## Prerequisites

1. Install PostgreSQL on your system
2. Make sure PostgreSQL service is running

## Database Setup Steps

1. Create the database:
   ```sql
   CREATE DATABASE katedral;
   ```

2. Connect to the database and create the required tables:
   ```sql
   -- Connect to katedral database
   \c katedral;
   
   -- Create users table
   CREATE TABLE IF NOT EXISTS users (
       id SERIAL PRIMARY KEY,
       username VARCHAR(50) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       role VARCHAR(20) DEFAULT 'admin',
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   -- Create announcements table
   CREATE TABLE IF NOT EXISTS announcements (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       content TEXT NOT NULL,
       author_id INTEGER REFERENCES users(id),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   
   -- Insert default admin user
   INSERT INTO users (username, password, role) VALUES 
       ('admin', '$2a$10$rVvV1/YPR1pQxVbxBH5p5e8lXJbYQqFV4p9y5z7V9n9v6x7B5p1pO', 'admin')
   ON CONFLICT (username) DO NOTHING;
   ```

## Environment Configuration

Update your `.env` file with the correct database connection details:

```
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=katedral
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

## Testing the Connection

To verify your database setup:

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Check the console output for "Database connected successfully" message

3. Test the API endpoints using a tool like Postman or curl:
   ```bash
   curl http://localhost:5000/api/health
   ```