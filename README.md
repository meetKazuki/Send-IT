# SendIT

[![Build Status](https://travis-ci.org/meetKazuki/Send-IT.svg?branch=api-endpoints)](https://travis-ci.org/meetKazuki/Send-IT)

## Project Description
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

### How to Use
1. Clone this repository using into your local machine
>  `git clone https://github.com/meetKazuki/Send-IT`.
2. Install dependencies
> `npm install`
3. Run `npm run dev-start` to start the development application.
4. Install postman to test all the endpoints.

#### Test
Run `npm test` for the server side test.

### Technologies Used
Modern JavaScript technologies were adopted for this project.

* ES2015:Also known as ES6 or ES2015 or ECMASCRIPT 6.
* NodeJS
* Express

The codes are written in accordance with `Airbnb` JavaScript style guide.

### Contributing
To contribute to this project, you can track its progress on [Github](https://github.com/meetKazuki/SendIT). 

### About Me
