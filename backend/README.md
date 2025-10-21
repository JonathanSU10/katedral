# Backend API for Gereja Katedral Santa Maria

This is the backend API for the Gereja Katedral Santa Maria website, built with Node.js, Express, and PostgreSQL.

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up the PostgreSQL database:
   - Create a database named `katedral`
   - Update the `.env` file with your database credentials

3. Run the database schema:
   ```bash
   # Connect to your PostgreSQL database and run the schema.sql file
   psql -U your_username -d katedral -f src/config/schema.sql
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. For production:
   ```bash
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/users/login` - User login
- `GET /api/users/auth` - Get authenticated user

### Announcements
- `GET /api/announcements` - Get all announcements
- `GET /api/announcements/:id` - Get announcement by ID
- `POST /api/announcements` - Create announcement (requires authentication)
- `PUT /api/announcements/:id` - Update announcement (requires authentication)
- `DELETE /api/announcements/:id` - Delete announcement (requires authentication)

## Environment Variables

Create a `.env` file in the backend root directory with the following variables:

```
PORT=5000
JWT_SECRET=your_jwt_secret_key
DB_USER=your_database_username
DB_HOST=localhost
DB_NAME=katedral
DB_PASSWORD=your_database_password
DB_PORT=5432
```

## Default Admin User

Username: `admin`
Password: `katedral2025`