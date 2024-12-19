from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

# Mock Product Data with Categories
products = [
    {"id": 1, "name": "Smartphone A1", "price": 299.99, "category": "Electronics"},
    {"id": 2, "name": "Smartphone B2", "price": 499.99, "category": "Electronics"},
    {"id": 3, "name": "Laptop Pro 15", "price": 999.99, "category": "Electronics"},
    {"id": 4, "name": "Wireless Headphones", "price": 59.99, "category": "Accessories"},
    {"id": 5, "name": "Bluetooth Speaker", "price": 89.99, "category": "Accessories"},
    {"id": 6, "name": "Running Shoes", "price": 79.99, "category": "Sportswear"},
    {"id": 7, "name": "Sports T-shirt", "price": 19.99, "category": "Sportswear"},
    {"id": 8, "name": "Gaming Mouse", "price": 49.99, "category": "Gaming"},
    {"id": 9, "name": "Gaming Keyboard", "price": 89.99, "category": "Gaming"},
    {"id": 10, "name": "Electric Kettle", "price": 29.99, "category": "Home Appliances"},
    {"id": 11, "name": "Vacuum Cleaner", "price": 149.99, "category": "Home Appliances"},
    {"id": 12, "name": "Fiction Book 1", "price": 14.99, "category": "Books"},
    {"id": 13, "name": "Fiction Book 2", "price": 19.99, "category": "Books"},
    {"id": 14, "name": "Cookware Set", "price": 79.99, "category": "Kitchen"},
    {"id": 15, "name": "Non-Stick Pan", "price": 39.99, "category": "Kitchen"},
]

# Mock User Authentication
users = {"user1": "password1", "user2": "password2"}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    
    if users.get(username) == password:
        return jsonify({"message": "Login successful"})
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@app.route('/products', methods=['GET'])
def get_products():
    query = request.args.get("query", "").lower()
    filtered_products = [
        product for product in products if query in product["name"].lower() or query in product["category"].lower()
    ]
    return jsonify(filtered_products)

if __name__ == '__main__':
    app.run(debug=True)
