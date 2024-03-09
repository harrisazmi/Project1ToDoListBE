# Simple Todo App with Express.js and MongoDB

This is a simple Todo application built using Express.js for the backend and MongoDB as the database. It allows users to perform basic CRUD operations on Todo items.

## Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account or a local MongoDB instance running
- Internet connection to access MongoDB Atlas if not running locally

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   MONGO_DB_URL=<Your MongoDB connection URL>
   PORT=<Port number for the server>
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

## Usage

- Access the API endpoints using a tool like Postman or by making HTTP requests from your frontend application.
- The following endpoints are available:
  - `GET /api/todos`: Get all Todo items.
  - `POST /api/todos`: Create a new Todo item.
  - `DELETE /api/todos`: Remove all Todo items.
  - `DELETE /api/todos/:id`: Remove a specific Todo item by ID.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests with your improvements.
