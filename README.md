# Chatty 💬

**Chatty** is a real-time chat application that allows users to communicate instantly via a clean and responsive interface. Built with a full-stack architecture, Chatty is designed to be fast, scalable, and easy to use.

---

## 🚀 Features

- 🔒 User authentication
- 💬 Real-time messaging using WebSockets
- 🧑‍🤝‍🧑 Group and one-on-one chat
- 🌓 Dark/light theme support
- 📱 Responsive design for all devices

---

## 🛠️ Tech Stack

### Frontend
- React
- Tailwind CSS / Bootstrap
- Axios / Fetch API
- Socket.io-client

### Backend
- Node.js + Express
- MongoDB (with Mongoose)
- Socket.io
- JWT Authentication

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/niteshmuchhala/chatty.git
cd chatty
```

### 2. Install dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

### 4. Run the app

#### Backend
```bash
cd backend
npm run dev
```

#### Frontend
```bash
cd ../frontend
npm start
```

---

## 📂 Project Structure

```
chatty/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📫 Contact

Feel free to connect on GitHub: [@niteshmuchhala](https://github.com/niteshmuchhala)
