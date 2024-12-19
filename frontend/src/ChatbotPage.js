import React, { useState } from "react";
import axios from "axios";
import "./chatbot.css";

const ChatbotPage = ({ user, logout }) => {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [products, setProducts] = useState([]);

  const handleQuerySubmit = async () => {
    setChatHistory([...chatHistory, { text: query, sender: "user" }]);
    setQuery("");

    try {
      const response = await axios.get("http://127.0.0.1:5000/products", {
        params: { query },
      });

      setChatHistory([
        ...chatHistory,
        { text: `You searched for: ${query}`, sender: "chatbot" },
        ...response.data.map((product) => ({
          text: `${product.name} - $${product.price}`,
          sender: "chatbot",
        })),
      ]);
      setProducts(response.data);
    } catch (error) {
      setChatHistory([
        ...chatHistory,
        { text: "Error fetching products", sender: "chatbot" },
      ]);
    }
  };

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <button onClick={logout}>Logout</button>
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
      />
      <button onClick={handleQuerySubmit}>Search</button>
    </div>
  );
};

export default ChatbotPage;
