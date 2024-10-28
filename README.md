🛍️ React E-commerce Project
A modern e-commerce web application built with React, featuring a shopping cart system and product catalog. This project demonstrates the implementation of Context API for state management and showcases responsive design principles.
🚀 Features

Product catalog display
Shopping cart functionality

Add/remove products
Increment/decrement product quantities
Real-time cart total calculation


Responsive navigation bar
Context-based state management
Integration with Fake Store API

🛠️ Technologies Used

React 18
React Router DOM
Material UI (MUI)
Context API for state management
SweetAlert2 for notifications
Bootstrap for styling
Vite as build tool

📋 Prerequisites
Before you begin, ensure you have installed:

Node.js (v14 or higher)
npm (v6 or higher)

💻 Installation

Clone the repository:

bashCopygit clone [your-repository-url]

Navigate to the project directory:

bashCopycd [project-name]

Install dependencies:

bashCopynpm install

Start the development server:

bashCopynpm run dev
🌟 Usage
The application consists of two main pages:

Products Page: Displays all available products fetched from the Fake Store API
Cart Page: Shows all items added to the cart with options to modify quantities

Context Structure
The application uses two main contexts:

ProductContext: Manages the product catalog and API interactions
CartContext: Handles shopping cart operations

Cart Operations
The cart supports the following actions:

Add product to cart
Remove product from cart
Increment product quantity
Decrease product quantity

📁 Project Structure

Copysrc/
├── components/
│   └── NavBarComponent.jsx
├── context/
│   ├── CartContext.js
│   ├── CartProvider.jsx
│   ├── ProductContext.js
│   └── ProductProvider.jsx
├── pages/
│   ├── StorePage.jsx
│   └── CartPage.jsx
└── App.jsx



🔧 Configuration
The application uses the Fake Store API for product data. No additional configuration is required for basic usage.
🤝 Contributing

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.
👥 Authors

Psagrox

🙏 Acknowledgments

Fake Store API for providing the product data
Material UI team for the component library
React team for the amazing framework
