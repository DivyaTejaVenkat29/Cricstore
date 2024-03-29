# Cricket Store Website

## Overview
This project is a full-stack e-commerce website for a cricket store, built using Django framework. It offers a platform to browse and purchase cricket equipment including sportswear, accessories, and cricket kits.

## Features
- **Product Catalog**: Browse a wide range of cricket products categorized into sportswear, accessories, and cricket kits.
- **Shopping Cart**: Add products to a cart, update quantities, and proceed to checkout.
- **Seller Interface**: Sellers can list their products for sale.
- **About Us Page**: Provides information about the store and its mission.
- **Responsive Design**: Optimized for various screen sizes for a seamless browsing experience.

## Technologies Used
- Django: Backend framework for handling server-side logic and database operations.
- HTML/CSS/JavaScript: Frontend development for creating the user interface and client-side interactivity.
- Bootstrap: Frontend framework for responsive and mobile-first design.
- SQLite: Database management system for storing product information and user data.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository_url>
   ```
2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
3. Run migrations:
   ```
   python manage.py migrate
   ```
4. Start the development server:
   ```
   python manage.py runserver
   ```
5. Access the website in your browser at `http://localhost:8000`.

## Folder Structure
- **cricapp/**: Django app containing views, templates, and static files.
- **cricstore/**: Django project settings and configurations.
- **static/**: Static files including CSS, JavaScript, and images.
- **templates/**: HTML templates for rendering dynamic content.

## Contributing
Contributions are welcome! If you would like to contribute to the project, please follow these steps:
- Fork the repository.
- Create a new branch for your feature: git checkout -b feature-name
- Make changes and commit them: git commit -am 'Add new feature'
- Push your changes to the branch: git push origin feature-name
- Submit a pull request with a detailed description of your changes.

## License
This project is licensed under the [MIT License](LICENSE).
