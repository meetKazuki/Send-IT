# SendIT

[![Build Status](https://travis-ci.org/meetKazuki/Send-IT.svg?branch=develop)](https://travis-ci.org/meetKazuki/Send-IT)
[![Coverage Status](https://coveralls.io/repos/github/meetKazuki/Send-IT/badge.svg)](https://coveralls.io/github/meetKazuki/Send-IT)
[![Maintainability](https://api.codeclimate.com/v1/badges/10d1502b46ac87ac2a06/maintainability)](https://codeclimate.com/github/meetKazuki/Send-IT/maintainability)

## Project Description
---
SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

### Features
* Users can create an account and log in.
* Users can create a parcel delivery order.
* Users can change the destination of a parcel delivery order.
* Users can cancel a parcel delivery order.
* Users can see the details of a delivery order.
* Admin can change the *status* and *present location* of a parcel delivery order.

#### Hopeful features
1. The application should display a Google Map with Markers showing the *pickup location* and the *destination*.
2. The application should display computed travel distance and journey duration between the *pickup location* and the *destination* (leveraging Google Maps `Distance Matrix Service`).
3. The user gets real-time email notification when Admin changes the status of their parcel.
4. The user gets real-time email notification when Admin changes the present location of their parcel.

### Technologies Used
---
Modern JavaScript technologies were adopted for this project.

* ES2015:Also known as ES6 or ES2015 or ECMASCRIPT 6.
* NodeJS
* Express
* PostgreSQL
* The codes were written following `Airbnb` JavaScript style guide.

### Getting Started
---

#### Prerequisites
Ensure that you have the following installed on your local machine:
- [NodeJS](https://nodejs.org/en/download/)
- [PostgreSQL](https://www.postgresql.org/download/)

#### Run locally
- To run app locally, make sure you have `NodeJS`, `PostgreSQL` installed.
- Clone this repository

  ```bash
    - git clone https://github.com/meetKazuki/Send-IT.git
    - cd Send-IT
    - npm install
  ```
- `npm run dev-start` to start the server and watch for file changes

#### Testing
- You can test the api locally using [*Postman*](https://www.getpostman.com)
- Run `npm test` for automated testing

#### HTTP Response Codes
- `200` `OK` The request was successful
- `400` `Bad Request` There was a problem with the request (security, malformed request)
- `404` `Not found` An attempt was made to access a resource that does not exist in the API
- `500` `Server Error` An error on the server occured

### Contributing
---
TBA
