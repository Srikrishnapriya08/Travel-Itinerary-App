✈️ Travel Itinerary App

A full-stack Travel Itinerary Management System built using Spring Boot (Backend) and React (Frontend). This application helps users plan, manage, and organize their travel plans efficiently.

🚀 Features
🔐 User Authentication (Login / Register)
🧳 Create and manage travel itineraries
📍 Add destinations and trip details
🗓️ Plan activities for each day
💰 Track travel expenses
👤 User-specific travel data
⚡ REST API integration between frontend and backend

🛠️ Tech Stack
Backend
Java
Spring Boot
Spring Data JPA
Spring Security (if used)
MySQL / H2 Database
Maven

Frontend
React.js
HTML, CSS, JavaScript
Axios (API calls)

📁 Project Structure
travel-itinerary-app/
│
├── springapp/              # Spring Boot Backend
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   ├── dto/
│   └── SpringappApplication.java
│
├── reactapp/               # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Srikrishnapriya08/Travel-Itinerary-App.git
cd Travel-Itinerary-App

2️⃣ Backend Setup (Spring Boot)
cd springapp

Configure database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/travel_db
spring.datasource.username=root
spring.datasource.password=your_password

Run backend:

mvn spring-boot:run

Backend runs on:

http://localhost:8080

3️⃣ Frontend Setup (React)
cd reactapp
npm install
npm start

Frontend runs on:

http://localhost:3000

🔗 API Endpoints (Sample)
POST /api/users/register – Register user
POST /api/users/login – Login user
GET /api/itineraries – Get all itineraries
POST /api/itineraries – Create itinerary
DELETE /api/itineraries/{id} – Delete itinerary

📌 Future Enhancements
🌍 Google Maps integration
📱 Mobile app version
🤖 AI-based travel suggestions
☁️ Cloud deployment (AWS / Render)
📊 Dashboard analytics
👩‍💻 Author

Srikrishna Priya
GitHub: Srikrishnapriya08
