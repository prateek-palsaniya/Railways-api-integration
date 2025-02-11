# IRCTC Railway Management System

This project is a **Railway Management System** designed to simulate key functionalities of the IRCTC system. The system enables train seat bookings, checks for train availability, updates train details, and ensures role-based access for users and admins. The backend is built using **Node.js**, **Express.js**, and **MySQL**.

## Features

- Secure user registration and authentication  
- JWT-based token authentication for protected access  
- Search available trains between selected source and destination  
- Book train seats with proper race condition handling  
- Admin controls: add new trains, update seat availability, and more  
- Role-based access management (admin/user)  
- Comprehensive error handling and input validation  

---

## Project Setup

### Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [MySQL](https://www.mysql.com/) (Database setup)
- [Postman](https://www.postman.com/) (for API testing)

### Environment Variables

Create a `.env` file in the project's root directory and define the following variables:  

``` bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=irctc_db
JWT_SECRET=your_jwt_secret
API_KEY=your_admin_api_key
```

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/prateek-palsaniya/Railways-api-integration.git
   cd irctc-railway-management
   ```
   
2. Install all necessary dependencies using npm:
   
   ```bash
    npm install
   ```
3. Set up your MySQL database:
  * Create a MySQL database named irctc_db.
  * Run the SQL scripts in database/schema.sql to create necessary tables (users, trains, bookings).

 Example:
 ``` bash
 CREATE DATABASE irctc_db;
USE irctc_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    train_number VARCHAR(50) NOT NULL,
    source VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    total_seats INT NOT NULL,
    available_seats INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    train_id INT,
    seats INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (train_id) REFERENCES trains(id)
);
```

### Starting the Server
Once the setup is complete, start the server using npm:

```bash
npm start

```
#### Note :- By default, the server will run on port 3000. You can access the API at http://localhost:3000.

### API Endpoints

#### User Routes
    1. Register a new user
       * Method :- POST
       * Endpoint :- http://localhost:3000/user/register
       * Body:
       
``` bash
       {
  "name": "Prateek palsaniya",
  "email": "prateekpalsaniya@gmail.com",
  "password": "password"
      }

```

  2. User Login
       * Method :- POST
       * Endpoint : http://localhost:3000/user/login
       * Request Body:
       
``` bash
    {
  "email": "prateekpalsaniya@gmail.com",
  "password": "password"
    }
 ```


  3. Train Availability Check
   
       * Method :- GET
       * Endpoint :- http://localhost:3000/user/availability?source=Jaipur&destination=Bhopal
       * Query Parameters
          * source: Departure station (e.g., "Jaipur")
          * destination: Arrival station (e.g., "Bhopal")
       * Response:
``` bash
{
  "available": true,
  "availableTrainCount": 1,
  "trains": [
    {
      "trainNumber": "123123",
      "availableSeats": 600
    }
  ]
}

```

 4. Seat Booking
       * Method :- POST
       * Endpoint :- http://localhost:3000/user/book
       * Request Body:
       
``` bash
  {
  "trainId": 1,
  "seatsToBook": 2
}

```
 * Response:

```bash
{
  "message": "Seats booked successfully"
}
```

Note :- JWT authentication is required for this endpoint.

5. Retrieve Booking Details

       * Method :- GET
       * Endpoint :- http://localhost:3000/user/getAllbookings

       * Response:
  
    
```bash
[
    {
        "booking_id": 17,
        "number_of_seats": 50,
        "train_number": "123123",
        "source": "Jaipur",
        "destination": "Bhopal"
    }
]


```

#### Admin Routes

1.   Add a new train

       * Method :- POST
       * Endpoint :- http://localhost:3000/admin/addTrain

       * Request Body:
  
    
```bash
{
    "message": "Trains added successfully",
    "trainIds": [
        {
            "trainNumber": "172622",
            "trainId": 21
        }
    ]
  }
```

         * Headers :
             * x-api-key: Admin API key stored in .env


  2. Update seat availability

       * Method :- PUT
       * Endpoint :- http://localhost:3000/admin/update-seats/10
       * Request Body:
```bash
 {
  "totalSeats": 200,
  "availableSeats": 150
 }
```
       * Response:

       
```bash
{
  "message": "Seats updated successfully"
}
 ```
        * Headers:
            * x-api-key:  Admin API key stored in .env

### Running Tests

You can test all the available APIs using Postman. The endpoints are well-structured and follow RESTful conventions.

```bash
[
  {
    "trainNumber": "123123",
    "source": "Jaipur",
    "destination": "Bhopal",
    "totalSeats": 300
  },
  {
    "trainNumber": "124124",
    "source": "Jaipur",
    "destination": "Bhopal",
    "totalSeats": 350
  },
  {
    "trainNumber": "125125",
    "source": "Jaipur",
    "destination": "Bhopal",
    "totalSeats": 400
  },
  {
    "trainNumber": "126126",
    "source": "Jaipur",
    "destination": "Bhopal",
    "totalSeats": 500
  },
  {
    "trainNumber": "127127",
    "source": "Jaipur",
    "destination": "Bhopal",
    "totalSeats": 600
  }
]
```

### Technologies Used

* Node.js: For backend logic
* Express.js: Web framework for building the RESTful API
* MySQL: Database for storing train, user, and booking data
* JWT: For authentication and authorization
* bcrypt: For hashing the passwords
* dotenv: For managing environment variables

### Future Enhancements
* Add frontend interface using React or Angular
* Implement seat selection
* Add email notifications for booking confirmations
* Integrate payment gateway




      

      


      









   
   













