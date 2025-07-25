

# Fruit and Vegetable Market Shop (MERN Stack)

This project demonstrates a full‑stack web application built using the **MERN (MongoDB, Express.js, React.js, Node.js)** architecture.
Inspired by the GeeksforGeeks tutorial, it showcases product browsing, filtering, and purchase features for fresh produce. Build a robust, 
interactive market shop platform using modern web technologies.

## Project Overview

* Browse menus of fruits and vegetables with categories and prices
* Filter and sort produce by type, price, freshness, etc.
* Add items to cart and simulate checkout
* Responsive UI built with React
* RESTful backend API using Express and Node.js
* Data storage and schema modelling with MongoDB


##  Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Frontend       | React.js, Axios         |
| Backend        | Node.js, Express.js     |
| Database       | MongoDB (with Mongoose) |
| Authentication | JWT (optional)          |


## Key Features

*  Product catalog with filtering and sorting
*  Cart functionality and order flow prototype
*  RESTful API endpoints for CRUD operations
*  Optional image upload support using Multer/Cloudinary
* Clean and responsive UI layout

## Project Structure


├── client/                 # React frontend
│   ├── src/
│   └── public/
├── server/                 # Backend (Express + Node)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── config/
├── .env                    # Environment configuration
├── README.md
├── package.json (root)

##  Installation & Setup

 1. Clone the repo

bash
git clone https://github.com/your-username/fruit-veg-market-mern.git
cd fruit-veg-market-mern

 2. Backend Setup

bash
cd server
npm install

Start backend:

bash
npm start

 3. Frontend Setup

bash
cd ../client
npm install
npm start


## Usage Flow

1. Users browse products by fruit or vegetable types.
2. Products can be filtered and sorted by various metrics.
3. Select items are added to cart with quantity control.
4. Checkout simulation sends “order” to backend.
5. Admin/Mock dashboard for product and order management (optional enhancements).
