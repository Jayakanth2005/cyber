# Frontend-Backend Integration

## Overview
The React frontend is now successfully connected to a mock backend API that mimics the NestJS backend structure.

## API Endpoints

### Base URL: `http://localhost:4000`

### 1. Get All Jobs
- **Endpoint**: `GET /jobs`
- **Query Parameters**:
  - `title` (optional): Filter by job title or company name
  - `location` (optional): Filter by location
  - `jobType` (optional): Filter by job type
  - `minSalary` (optional): Minimum salary filter
  - `maxSalary` (optional): Maximum salary filter
  - `page` (optional): Page number (default: 1)
  - `limit` (optional): Items per page (default: 10)

### 2. Get Single Job
- **Endpoint**: `GET /jobs/:id`
- **Parameters**: `id` - Job UUID

### 3. Create Job
- **Endpoint**: `POST /jobs`
- **Body**:
```json
{
  "title": "Software Engineer",
  "companyName": "Tech Corp",
  "location": "Remote",
  "jobType": "Full-time",
  "salaryRange": "15LPA",
  "description": "Job description",
  "requirements": "Job requirements",
  "responsibilities": "Job responsibilities",
  "applicationDeadline": "2024-12-31T00:00:00.000Z"
}
```

### 4. Update Job
- **Endpoint**: `PUT /jobs/:id`
- **Body**: Same as create job

### 5. Delete Job
- **Endpoint**: `DELETE /jobs/:id`

## Running Both Servers

1. **Start Backend** (Terminal 1):
```bash
cd frontend
node mock-backend.js
```

2. **Start Frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```

## Features Working

✅ **Job Listing**: Frontend fetches jobs from backend API
✅ **Job Filtering**: Search, location, job type, and salary filters work through API
✅ **Job Creation**: Create new jobs through the modal, saves to backend
✅ **Real-time Updates**: Frontend refreshes job list after creating new jobs
✅ **Error Handling**: Shows error messages when backend is not available
✅ **Loading States**: Shows loading spinner while fetching data

## Data Flow

1. **Frontend** → **Backend**: API calls using Axios
2. **Backend** → **Frontend**: JSON responses with job data
3. **Data Transformation**: Backend job format is transformed to frontend format
4. **UI Updates**: React state updates trigger UI re-renders

## Frontend Changes Made

1. **API Service** (`src/services/api.ts`): Axios-based API client
2. **Data Transformers** (`src/utils/jobTransformers.ts`): Convert between frontend/backend formats
3. **App Component**: Updated to use API instead of mock data
4. **Error Handling**: Added loading states and error messages
5. **Real-time Updates**: Jobs refresh after creation

## Mock Backend Features

- In-memory job storage (resets on server restart)
- CORS enabled for frontend connection
- Request/response logging for debugging
- Filter support for all job fields
- RESTful API design matching NestJS structure

## Testing the Integration

1. Open frontend at `http://localhost:3000`
2. See jobs loaded from backend
3. Use filters to test API queries
4. Create a new job to test POST endpoint
5. Check browser console and backend logs for debugging

## Next Steps

To connect to the real NestJS backend:
1. Set up PostgreSQL database
2. Run NestJS backend on port 4000
3. Update API base URL if needed
4. The frontend will work seamlessly with the real backend