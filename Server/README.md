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
json
{
"fullname": {
"firstname": "John",
"lastname": "Doe"
},
"email": "john.doe@example.com",
"password": "securePassword123"
}


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
