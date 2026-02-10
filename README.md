# Nexus Consulting - System Architecture

## Architecture Overview
This project uses a standard MERN stack architecture. The **Client** (React/Vite) handles the presentation layer and communicates with the **Server** (Node/Express) via a RESTful API. The server handles business logic and validation before persisting data to **MongoDB**. This separation ensures scalability and maintainability, allowing the frontend and backend to evolve independently.

## API Structure
- **GET /api/services**: Fetches summary of all services for listing pages.
- **GET /api/services/:id**: Fetches detailed information for a specific service.
- **POST /api/contact**: Accepts user inquiries, validates input, and stores in DB.
- **GET /api/contact**: Admin endpoint to retrieve submitted inquiries.

## Database Schema Decisions
- **Service Collection**: Structured with `title`, `shortDescription`, `detailedDescription`, and an array of `useCases` to support rich frontend displays without joining tables.
- **Contact Collection**: Stores `name`, `email`, `message`, and `createdAt` timestamp. Kept simple for this phase but extensible for status tracking (e.g., `status: 'new' | 'replied'`).

## Future Improvement
With more time, I would implement **JWT Authentication** to secure the admin endpoints (like `GET /api/contact` and potential `POST /api/services` for CMS functionality), ensuring only authorized personnel can view inquiries or update content.
