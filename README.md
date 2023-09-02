# Book Listing Application Backend

This repository contains the backend implementation for a Book Listing Application. It provides CRUD (Create, Read, Update, Delete) operations, pagination, and filtering features using TypeScript, Express.js, Prisma, and PostgreSQL.

## Table of Contents

- [Technology Stack](#technology-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Technology Stack

- **Programming Language**: TypeScript
- **Web Framework**: Express.js
- **Object-Relational Model (ORM)**: Prisma
- **Database**: PostgreSQL

## Features

- **CRUD Operations**: Easily manage books with Create, Read, Update, and Delete operations.
- **Pagination**: Retrieve a specific number of books per page to enhance performance.
- **Filtering**: Search for books based on various criteria, such as title, author, genre, etc.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local development machine.
- PostgreSQL database setup and connection details available.

### Installation

1. Clone this repository:

   ```bash
   https://github.com/f4faysal/book-catallog-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd book-catallog-backend
   ```

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Configure the environment variables:

   Create a `.env` file in the project root directory and configure the following variables:

   ```env
   PORT=5000  # The port on which the server will run
   DATABASE_URL=postgresql://your-username:your-password@localhost:5432/your-database-name  # PostgreSQL connection URL
   ```

5. Initialize and migrate the database:

   ```bash
   npx prisma db push
   ```

6. Start the application:

   ```bash
   yarn dev
   ```

## Usage

To use the Book Listing Application backend, follow these steps:

1. Ensure the backend server is running (see the Installation section).

2. Use the provided API endpoints (documented below) to interact with the application.

## API Endpoints

The following API endpoints are available:

### Live Link: [https://book-catallog-backend.vercel.app/api/v1/](https://book-catallog-backend.vercel.app/api/v1/)

### Application Routes:

### Auth

- api/v1/auth/signup (POST)
- api/v1/auth/signin (POST)
- sign in body example data:
  ```bash
   {
    "email": "admin@gmail.com",
    "password": "123456"
    }
  ```
  
#### User


- api/v1/users (GET)
- api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
- api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Books

- Search, Filter, Pagination (GET) Example:

```bash
   api/v1/books/?page=1&limit=10&search=Faysal&minPrice=250&maxPrice=500&category=75e203d3-6b59-4c00-8ef8-a5319b1aeee6
```

- Sort, Filter, Pagination (GET) Example: [Link to Example API](https://example.com/api/v1/books/?page=1&limit=10&minPrice=50&maxPrice=1000&category=aff8ebfa-1646-48da-b94e-90caad62cb10&sortBy=price&sortOrder=desc)


```bash
   api/v1/books/?page=1&limit=10&minPrice=50&maxPrice=1000&category=aff8ebfa-1646-48da-b94e-90caad62cb10&sortBy=price&sortOrder=desc
```

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/:orderId (GET)

For detailed information on how to use each endpoint, refer to the API documentation.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.
Happy coding! 3. Integrate this backend with the frontend or client application of your choice.
