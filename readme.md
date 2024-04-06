

# Customer Management API

This project is a simple Customer Management API built with Node.js, Express, and MongoDB. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on customer data.

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd customer-management-api
```

2. Install dependencies:

```bash
npm install
```

3. Start the MongoDB server:

```bash
mongod
```

4. Start the API server:

```bash
npm start
```

The API server will start running at `http://localhost:3000`.

## Endpoints

### Get Welcome Message

- **URL:** `/`
- **Method:** `GET`
- **Description:** Returns a welcome message indicating that the Customer Management API is running.

### Get All Customers

- **URL:** `/customers`
- **Method:** `GET`
- **Description:** Retrieves all customers from the database.

### Create a Customer

- **URL:** `/customer`
- **Method:** `POST`
- **Description:** Creates a new customer with the provided details (firstName, lastName, age, gender, email).

### Get Customer by ID

- **URL:** `/customer/:id`
- **Method:** `GET`
- **Description:** Retrieves a customer by their ID.

### Update Customer 

- **URL:** `/customer/:id`
- **Method:** `PUT`
- **Description:** Updates a customer's details by their ID.

### Delete Customer

- **URL:** `/customer/:id`
- **Method:** `DELETE`
- **Description:** Deletes a customer by their ID.
## Error Handling

In case of any unexpected errors during the execution of operations, the API ensures proper error handling to provide a seamless experience for users and developers. Here's how errors are handled:

- If an error occurs during any operation, the API responds with a descriptive error message along with a status code of 500 (Internal Server Error).


This approach ensures that users and developers can rely on the API to deliver consistent and reliable performance even in the face of unexpected errors.
