# Wanderlust 🌍✈️

Wanderlust is a full-stack, Airbnb-inspired web application designed to allow users to explore, host, and review unique accommodations across the world. Built using the (HTML5, CSS3, JavaScript, MongoDB, Express.js, Node.js), this application provides a seamless experience for travelers looking for their next destination and hosts wanting to list their properties.

## 🌐 Live Demo
Experience the live application deployed on Render: <a href=https://wanderlust-mj1m.onrender.com/listing>WanderLust<a/>

## 🌟 Key Features
- **Authentication & Authorization:** Secure user registration, login, and session management (with Passport.js).
- **Listing Management:**
  - Create, edit, view, and delete property listings (CRUD operations).
  - Only authorized listing owners can edit or delete their posts.
  - Image upload support via Cloudinary integration (multer).
- **Reviews & Ratings:**
  - Authenticated users can leave reviews and star ratings for listings.
  - Users can delete their own reviews.
- **Interactive Maps:** Location-based geocoding and map rendering integration (Maptiler).
- **Responsive Design:** Mobile-friendly UI styled using Bootstrap for clean presentation on all device screens.

---

## 🛠️ Tech Stack

### **Frontend**
- **HTML5 & CSS3**
- **JavaScript (ES6+)**
- **EJS Templates**
- **Bootstrap 5** (UI Components & Layouts)

### **Backend**
- **Node.js** (Runtime Environment)
- **Express.js** (Web Application Framework)
- **RESTful APIs**

### **Database & Cloud Services**
- **MongoDB & Mongoose** (Database & ODM)
- **Cloudinary** (Cloud Storage for Image Uploads)
- **Render** (Cloud Deployment Platform)

### **Authentication & Utilities**
- **Passport.js** (Authentication Middleware)
- **Joi** (Schema Validation)
- **Express-Session & Connect-Mongo** (Session Store)

---

## 🚀 Deployment & Environment Variables

This application is deployed directly on **Render**. 

> **Note on Security:** Sensitive credentials (such as database URIs, API keys, and session secrets) are managed securely via Render's Environment Variables dashboard and are explicitly excluded from the public source code repository using `.gitignore`.

If you wish to clone and run this project locally for development:

1. **Clone the Repository:**
   git clone [https://github.com/syed-shayzan/wanderlust.git]<br>
   cd wanderlust
   
*Install Dependencies* : <br>
Bash <br>
npm install

*Configure Environment Variables:*<br>
Create a local .env file in the root folder with your own API credentials:<br>
PORT=8080<br>
ATLASDB_URL=your_mongodb_connection_string<br>
SECRET=your_session_secret<br>
CLOUD_NAME=your_cloudinary_cloud_name<br>
CLOUD_API_KEY=your_cloudinary_api_key<br>
CLOUD_API_SECRET=your_cloudinary_api_secret<br>
MAP_TOKEN=your_map_api_token<br>

*start the server : *<br>
Bash<br>
npm start or node app.js

**Floder Structure 📁**<br>
Wanderlust/<br>
├── init/              # Database initialization and sample data<br>
├── models/            # Mongoose schemas (Listing, Review, User)<br>
├── routes/            # Express route handlers<br>
├── utils/             # Helper functions & custom error classes<br>
├── views/             # EJS views / React components<br>
├── public/            # Static assets (CSS, JS scripts, Images)<br>
├── .gitignore         # Excludes node_modules and .env from git<br>
├── app.js             # Server entry point<br>
└── package.json       # Project dependencies & scripts<br>


🤝 Contributing<br>
Contributions, issues, and feature requests are welcome!<br>
Fork the Project<br>
Create your Feature Branch (git checkout -b feature/AmazingFeature)<br>
Commit your Changes (git commit -m 'Add some AmazingFeature')<br>
Push to the Branch (git push origin feature/AmazingFeature)<br>
Open a Pull Request<br>

📜 License<br>
This project is licensed under the MIT License.
