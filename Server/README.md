# API Documentation

## User Registration Endpoint

### POST /user/register

This endpoint is used to register a new user.

#### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 8 characters long.

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

#### Responses

- **201 Created**: The user was successfully registered. The response will include a JSON object with a token and user details.
  - Example:
    ```json
    {
      "token": "jwt-token",
      "user": {
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **400 Bad Request**: The request body is invalid or missing required fields. The response will include an array of error messages.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email address",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```

#### Notes

- Ensure that the `Content-Type` header is set to `application/json` when making requests to this endpoint.
- The `JWT_SECRET_KEY` environment variable must be set for token generation.

## User Login Endpoint

### POST /user/login

This endpoint is used to log in a user.

#### Request Body

The request body should be a JSON object with the following fields:

- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user account. Must be at least 8 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

#### Responses

- **200 OK**: The user was successfully logged in. The response will include a JSON object with a token and user details.
  - Example:
    ```json
    {
      "token": "jwt-token",
      "user": {
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**: The email or password is incorrect.
  - Example:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

## User Profile Endpoint

### GET /user/profile

This endpoint is used to get the profile of the logged-in user.

#### Responses

- **200 OK**: The user profile was successfully retrieved. The response will include a JSON object with user details.
  - Example:
    ```json
    {
      "user": {
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com"
      }
    }
    ```

- **401 Unauthorized**: The user is not logged in.
  - Example:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

## User Logout Endpoint

### GET /user/logout

This endpoint is used to log out the user.

#### Responses

- **200 OK**: The user was successfully logged out.
  - Example:
    ```json
    {
      "message": "User logged out successfully"
    }
    ```

## Driver Registration Endpoint

### POST /driver/register

This endpoint is used to register a new driver.

#### Request Body

The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the driver. Must be at least 3 characters long.
  - `lastname` (string, required): The last name of the driver.
- `email` (string, required): The email address of the driver. Must be a valid email format.
- `password` (string, required): The password for the driver account. Must be at least 6 characters long.
- `vehicle`: An object containing:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of "car", "motorcycle", or "auto".

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Responses

- **201 Created**: The driver was successfully registered. The response will include a JSON object with a token and driver details.
  - Example:
    ```json
    {
      "token": "jwt-token",
      "driver": {
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **400 Bad Request**: The request body is invalid or missing required fields. The response will include an array of error messages.
  - Example:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```

## Driver Login Endpoint

### POST /driver/login

This endpoint is used to log in a driver.

#### Request Body

The request body should be a JSON object with the following fields:

- `email` (string, required): The email address of the driver. Must be a valid email format.
- `password` (string, required): The password for the driver account. Must be at least 6 characters long.

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "securePassword123"
}
```

#### Responses

- **200 OK**: The driver was successfully logged in. The response will include a JSON object with a token and driver details.
  - Example:
    ```json
    {
      "token": "jwt-token",
      "driver": {
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **401 Unauthorized**: The email or password is incorrect.
  - Example:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

## Driver Profile Endpoint

### GET /driver/profile

This endpoint is used to get the profile of the logged-in driver.

#### Responses

- **200 OK**: The driver profile was successfully retrieved. The response will include a JSON object with driver details.
  - Example:
    ```json
    {
      "driver": {
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```

- **401 Unauthorized**: The driver is not logged in.
  - Example:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

## Driver Logout Endpoint

### GET /driver/logout

This endpoint is used to log out the driver.

#### Responses
- **200 OK**: The driver was successfully logged out.
  - Example:
    ```json
    {
      "message": "Driver logged out successfully"
    }
    ```

## Middleware

### Auth Middleware

The auth middleware is used to authenticate users and drivers based on the JWT token provided in the request headers or cookies.

- `authUser`: Authenticates a user.
- `authDriver`: Authenticates a driver.

## Models

### User Model

The user model defines the schema for user documents in the MongoDB database. It includes methods for generating authentication tokens, comparing passwords, and hashing passwords.

### Driver Model

The driver model defines the schema for driver documents in the MongoDB database. It includes methods for generating authentication tokens, comparing passwords, and hashing passwords.

### Blacklist Token Model

The blacklist token model defines the schema for storing blacklisted JWT tokens in the MongoDB database. Blacklisted tokens are used to prevent unauthorized access after a user or driver logs out.

## Services

### User Service

The user service provides functions for creating and managing users.

### Driver Service

The driver service provides functions for creating and managing drivers.

## Controllers

### User Controller

The user controller handles user-related requests, such as registration, login, profile retrieval, and logout.

### Driver Controller

The driver controller handles driver-related requests, such as registration, login, profile retrieval, and logout.
