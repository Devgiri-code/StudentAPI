
# Student API

This is a simple RESTful API developed using Node.js and Express, which supports basic CRUD operations for managing student information.



## Features

- Create, Read, Update, and Delete (CRUD) operations for student records.
- Simple and organized code structure.
- CI/CD pipeline setup for deployment on Azure.

## Technologies Used

- Node.js
- Express
- body-parser
- Azure App Service
- GitHub Actions (for CI/CD)

## Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd <repository-name>
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Environment Configuration

Make sure you have Node.js and npm installed. You can download them from [Node.js Official Website](https://nodejs.org/).

## Running the API Locally

1. Start the server:
   ```bash
   node app.js
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint               | Description                             |
|--------|------------------------|-----------------------------------------|
| GET    | /students              | Retrieve a list of all students.       |
| GET    | /students/{id}         | Retrieve details of a student by ID.   |
| POST   | /students              | Add a new student.                      |
| PUT    | /students/{id}         | Update an existing student by ID.      |
| DELETE | /students/{id}         | Delete a student by ID.                |

## Deployment

This API is deployed on Azure App Service. The CI/CD pipeline is configured using GitHub Actions, enabling automatic deployment upon changes to the main branch.

### Azure Deployment Steps

1. Create an Azure account and log in.
2. Create a resource group and an Azure App Service.
3. Set up continuous deployment from GitHub.
4. Add the Azure publish profile to GitHub secrets.
5. Push changes to the GitHub repository to trigger deployment.

## Testing the API

To test the API, you can use the provided `.http` file. Make sure you have the REST Client extension installed in Visual Studio Code.

1. Open `test.http` in VS Code.
2. Click on `Send Request` for the various HTTP methods to interact with the API.


