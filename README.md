# 📸 MediaPost - Backend API

A robust RESTful API backend for a social media application with image upload capabilities, built with Node.js, Express, and MongoDB.

## 🚀 Features

- **Post Management**: Create, retrieve, and delete posts
- **Image Upload**: Cloud-based image storage using ImageKit
- **RESTful API**: Clean and organized API endpoints
- **Error Handling**: Comprehensive error handling and validation
- **Database**: MongoDB with Mongoose ODM
- **CORS Support**: Cross-origin resource sharing enabled

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Cloud Storage**: ImageKit
- **File Upload**: Multer
- **Environment Management**: dotenv

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- ImageKit account for cloud storage

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   PORT=3000
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

## 📡 API Endpoints

### **POST** `/api/create-post`
Create a new post with an image

**Request:**
- Method: `POST`
- Content-Type: `multipart/form-data`
- Body:
  - `image` (file): Image file
  - `caption` (string): Post caption

**Response:**
```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "...",
    "image": "https://...",
    "caption": "Your caption"
  }
}
```

---

### **GET** `/api/posts`
Retrieve all posts

**Response:**
```json
{
  "message": "Post displayed successfully",
  "posts": [
    {
      "_id": "...",
      "image": "https://...",
      "caption": "Caption text"
    }
  ]
}
```

---

### **DELETE** `/api/posts/:id`
Delete a post by ID

**Parameters:**
- `id` (string): Post ID

**Response:**
```json
{
  "message": "Post deleted successfully"
}
```

## 📁 Project Structure

```
backend/
├── src/
│   ├── api/
│   │   └── posts.api.js       # Post routes
│   ├── db/
│   │   └── db.js              # Database connection
│   ├── models/
│   │   └── post.model.js      # Post schema
│   ├── services/
│   │   └── storage.service.js # ImageKit integration
│   └── app.js                 # Express app configuration
├── server.js                  # Server entry point
├── .env                       # Environment variables (not committed)
├── .gitignore                 # Git ignore rules
└── package.json               # Dependencies and scripts
```

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | Yes |
| `IMAGEKIT_PRIVATE_KEY` | ImageKit private API key | Yes |
| `PORT` | Server port (default: 3000) | No |
| `FRONTEND_URL` | Frontend URL for CORS | No |

## 🧪 Testing

Test the API using tools like:
- [Postman](https://www.postman.com/)
- [Thunder Client](https://www.thunderclient.com/)
- cURL

Example cURL request:
```bash
curl -X POST http://localhost:3000/api/create-post \
  -F "image=@/path/to/image.jpg" \
  -F "caption=My first post"
```

## 🚀 Deployment

This application is deployed on [Render](https://render.com)
**Live API:** `https://your-app.onrender.com`

### Deployment Steps:
1. Push code to GitHub
2. Connect repository to Render/Railway
3. Add environment variables in platform settings
4. Deploy

## 📄 License

This project is open source and available under the [MIT License](LICENSE).


⭐ **If you found this project helpful, please consider giving it a star!**
