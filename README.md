[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20069576&assignment_repo_type=AssignmentRepo)

---

📚 News Aggregator API
This project integrates user authentication (JWT), user preferences, and external news API fetching.

## Setup Instructions
    Prerequisites
    Node.js (v18 or above)
    npm (Node Package Manager)

⚙️ Installation Steps
## 1.Clone the repository:

git clone https://github.com/airtribe-projects/news-aggregator-api-divyasrimanda.git
cd news-aggregator-api-divyasrimanda

## 2.Install dependencies the following:
    npm i axios
    npm i bcryptjs
    npm i dotenv
    npm iexpress
    npm ijsonwebtoken
    npm i mongoose

## 3.Start the server: 
npm run dev

## 4.Server will start on:
localhost:5000

---------------------------------------------------------------------------

📁 Folder Structure
news-aggregator-api-divyasrimanda/
├── controllers/
│ └── authController.js
└── newsController.js
└── prefrencesController.js
├── middleware/
└── authMiddleware.js
└── errorHandler.js
├── models
└── User.js
├── routes/
│ └── authRoutes.js
└── newsRoutes.js
└── prefrencesRoutes.js
├── app.js
├── package.json
└── README.md

-------------------------------------------------------------

Below are the available API endpoints.

🔑 Authentication
## Signup

POST /api/auth/signup
Registers a new user.
## Request Body (JSON):
    {
    "name": "Divyasri",
    "email": "user@example.com",
    "password": "password123"
    }

## Response (201 Created):
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR..."
    }

## Login
POST /api/auth/login
Logs in an existing user and returns a JWT token.
## Request Body (JSON):
    {
    "email": "user@example.com",
    "password": "password123"
    }

## Response (200 OK):
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR..."
    }

👤 User Preferences
## Get Preferences

GET /api/preferences
Fetches the logged-in user’s preferences.

## Headers:
Authorization: Bearer <your-jwt-token>

## Response (200 OK):

    {
    "preferences": ["technology", "sports"]
    }

## Update Preferences

PUT /api/preferences
Updates the user’s preferences.

## Headers:

Authorization: Bearer <your-jwt-token>

## Request Body (JSON):

    {
    "preferences": ["business", "health", "science"]
    }

## Response (200 OK):

    {
    "message": "Preferences updated successfully",
    "preferences": ["business", "health", "science"]
    }

📰 News

## Fetch News

GET /api/news
Fetches news articles from the external News API based on the logged-in user’s preferences.

## Headers:

Authorization: Bearer <your-jwt-token>

## Response (200 OK):

    {
    "news": [
        {
        "source": { "id": null, "name": "TechCrunch" },
        "author": "John Doe",
        "title": "Latest tech news...",
        "description": "Some description here",
        "url": "https://newsapi.org/...",
        "publishedAt": "2025-08-21T12:00:00Z",
        "content": "Article content..."
        },
        ...
    ]
    }

## Error Responses:

        401 Unauthorized → Missing or invalid token.
        400 Bad Request → No preferences set for the user.
        500 Internal Server Error → News API failure.

⚙️ Environment Variables

## Create a .env file in the project root:

        PORT=5000
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        NEWS_API_KEY=your_newsapi_key

## Testing in Postman

        Signup/Login → copy the token from the response.
        Set Authorization header → Bearer <token> in Postman.
        Call /api/preferences → set/update preferences.
        Call /api/news → get personalized news feed.
