# Database Records Viewer

A full-stack web application that retrieves and displays records from a database.

**Current Date and Time (UTC):** 2025-03-05 18:26:51
**Created By:** a2ys, koshambiB

## Project Structure

```
database-records-viewer/
├── database-records-viewer/            # React frontend application
├── backend/                            # Express API server
└── README.md                           # This file
```

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Running the Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

The backend server will start on port 3001 (http://localhost:3001).

### Running the Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm start
```

The frontend application will start on port 3000 (http://localhost:3000).

## Backend API

The backend provides the following API endpoints:

- `GET /api/records` - Returns all records from the database
- `GET /api/records/:id` - Returns a specific record by ID
- `GET /health` - Health check endpoint that returns server status

### Sample Response

```json
[
  {
    "id": 1,
    "name": "Record 1",
    "description": "This is the first record in our database"
  },
  {
    "id": 2,
    "name": "Record 2",
    "description": "This is the second record with more detailed information"
  }
]
```

## Frontend Application

The frontend is built with React and provides:

- A responsive interface to display all records
- Loading indicators while fetching data
- Error handling for failed API calls
- Clean, modern UI design

## Technologies Used

### Backend

- Node.js
- Express.js
- CORS for cross-origin resource sharing

### Frontend

- React
- CSS for styling
- Fetch API for data retrieval

## Development Notes

### Environment Variables

#### Frontend

Create a `.env` file in the frontend directory with:

```
REACT_APP_API_URL=http://localhost:3001/api
```

#### Backend

Create a `.env` file in the backend directory with:

```
PORT=3001
```

### Database Configuration

The default implementation uses mock data. If you want to connect to a real database:

1. Install appropriate database driver (e.g., `sqlite3`, `mysql`, `pg`)
2. Update the connection logic in `server.js`
3. Create appropriate database schemas

## Project Customization

### Adding New Features

- **Authentication:** Add user login/registration functionality
- **CRUD Operations:** Implement create, update, delete functionalities
- **Filtering:** Add search and filter capabilities
- **Pagination:** Add pagination for large datasets

### Styling

The frontend uses CSS for styling. You can modify the CSS files to match your organization's branding.

## Troubleshooting

### Common Issues

1. **API Connection Error**

   - Verify backend server is running
   - Check CORS settings in backend
   - Ensure API URL is correctly set in frontend

2. **Missing Dependencies**

   - Run `npm install` in both frontend and backend directories

3. **Port Already in Use**
   - Change the port in `.env` file or directly in `server.js`

---

_This project was created as part of a coding assignment._

_Last updated: 2025-03-05_
