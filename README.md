# Express + MongoDB + Mongoose Demo

This is a basic Express app using MongoDB and Mongoose.

## Prerequisites

- Node.js
- MongoDB running locally on default port (27017)

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start MongoDB if not already running.

3. Start the app:
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

## API Endpoints

- `GET /` — Health check route
- `POST /items` — Create an item (expects `{ "name": "Item name" }` in body)
- `GET /items` — List all items
