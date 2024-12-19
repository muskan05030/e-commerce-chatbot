# E-commerce Sales Chatbot

## Project Overview
The **E-commerce Sales Chatbot** is designed to enhance the shopping experience on an e-commerce platform. It allows users to interact with a chatbot to explore, search for, and purchase products. The chatbot is integrated with a mock inventory system and provides personalized recommendations based on user queries. This project includes a **front-end React.js application**, a **back-end Flask API**, and a **SQLite database** to simulate real-world e-commerce transactions.

## Features
- **Login Authentication**: Users must log in to interact with the chatbot.
- **Product Search**: The chatbot handles user queries about products and displays relevant results.
- **Responsive Design**: The app is mobile-friendly and works seamlessly across devices.
- **Session Management**: User sessions are maintained across interactions.
- **Chatbot Interface**: A simple and intuitive chatbot interface for product browsing.

## Technology Stack
- **Frontend**:
  - React.js
  - Axios
  - HTML5, CSS3
- **Backend**:
  - Python
  - Flask (Web Framework)
  - SQLite (Database)
- **Others**:
  - Node.js
  - npm
  - SQLite3

## Installation Instructions

### 1. Clone the repository:
git clone https://github.com/MuskanAli/e-commerce-chatbot.git

### 2. Frontend Setup
- Navigate to the frontend folder:
  cd frontend
  
- Install dependencies:
  npm install
  
- Run the frontend server:
  npm start

### 3. Backend Setup
- Navigate to the backend folder:
  cd backend
  
- Create a virtual environment:
  python -m venv venv

- Activate the virtual environment:
  - **Windows**:
    venv\Scripts\activate
    
  - **macOS/Linux**:
    source venv/bin/activate
  
- Install required Python packages:
  pip install -r requirements.txt
  
- Run the Flask backend server:
  python app.py

## Usage Instructions
1. Open the app at `http://localhost:3000`.
2. Log in with the credentials `user: test` and `password: test`.
3. Start chatting with the chatbot to explore products and make inquiries.

## Code Structure
- **frontend/**: Contains the React components, including `App.js`, `LoginPage.js`, and `ChatbotPage.js`.
- **backend/**: Contains the Flask API and the database file (`products.db`) with mock e-commerce product data.

## Project Results
- Successfully implemented a chatbot capable of handling product queries.
- Integrated a login system to ensure secure access.
- The application is responsive and works seamlessly across desktop, tablet, and mobile devices.

## Challenges and Solutions
- **Challenge**: API integration and handling asynchronous operations.
  - **Solution**: Used Axios in the frontend and Flask in the backend to ensure smooth communication and data fetching.
  
- **Challenge**: Designing a user-friendly interface.
  - **Solution**: Ensured that the UI was clean, minimal, and intuitive, using CSS for styling.

## Contributors
- Muskan Ali

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
