# HRMS API 🚀

This project is a simple **HRMS (Human Resource Management System) API** built with **Node.js, Express, and MongoDB**.  
It provides endpoints to manage **candidates** and **job listings**.  

---

## 📌 Features
- Candidate APIs
  - Create/Update candidate data (upsert)
  - Get all candidates
  - Get candidates based on `job_id`
- Job Listing APIs
  - Create a job listing
  - Get all job listings
- MongoDB with Mongoose
- REST Client support in VS Code

---

## 📂 Project Structure
hrms_api/
│── server.js # Entry point
│── models/ # Mongoose schemas
│── routes/ # API routes
│── .gitignore
│── package.json
│── README.md
│── requests.http # Test API calls (for VS Code REST Client)

yaml
Copy code

---

## 🛠️ Installation & Setup

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/hrms_api.git
cd hrms_api
2. Install dependencies
bash
Copy code
npm install
3. Configure MongoDB
Make sure MongoDB is running locally or use MongoDB Atlas.
Update the connection string inside server.js if needed:

js
Copy code
mongoose.connect("mongodb://127.0.0.1:27017/hrms", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
4. Run the server
bash
Copy code
npm start
You should see:

arduino
Copy code
✅ MongoDB connected
🚀 Server running on port 5000
📡 API Endpoints
Candidate APIs
POST /api/candidates → Add/Update candidate data

GET /api/candidates → Get all candidates

GET /api/candidates/:job_id → Get candidates by job_id

Job Listing APIs
POST /api/job_listings → Add a job listing

GET /api/job_listings → Get all job listings

🔍 Testing with VS Code REST Client
Install the REST Client extension in VS Code.

Create a file requests.http in your project root.

Add requests like this:

http
Copy code
### Add a Candidate
POST http://localhost:5000/api/candidates
Content-Type: application/json

{
  "name": "Anurag",
  "experience": 5,
  "skills": ["Node.js", "MongoDB"],
  "qualification": "B.Tech",
  "certifications": ["AWS"],
  "applied_for": ["job123"]
}

### Get All Candidates
GET http://localhost:5000/api/candidates

### Get Candidates by Job ID
GET http://localhost:5000/api/candidates/job123

### Add a Job Listing
POST http://localhost:5000/api/job_listings
Content-Type: application/json

{
  "job_description": "Backend Developer",
  "location": "Remote",
  "employment_type": "Full-time",
  "role": "Developer",
  "experience": "3+ years",
  "skillSet": ["Node.js", "MongoDB"]
}

### Get All Job Listings
GET http://localhost:5000/api/job_listings
Click "Send Request" above each request to test.

✅ Tech Stack
Node.js + Express → Server

MongoDB + Mongoose → Database

REST Client (VS Code) → API testing

Nodemon → Auto-restart dev server

👨‍💻 Author
Built with ❤️ by [ANURAG NALAPUR]
