# ⏺️ Buttons Generator

A dynamic and interactive React app powered by OpenAI that generates styled HTML Buttons based on user inputs. Explore the live demo
**[Here](https://mohammadagbaryya.github.io/buttons-generator)**.

## 🚦 CI Status

![CI](https://github.com/mohammadAgbaryya/buttons-generator/actions/workflows/ci.yml/badge.svg)

## 📊 Test Coverage

![Statements](./coverage-badges/badge-statements.svg)
![Branches](./coverage-badges/badge-branches.svg)
![Functions](./coverage-badges/badge-functions.svg)
![Lines](./coverage-badges/badge-lines.svg)

## Demo Video

https://drive.google.com/file/d/1ysqR5ctgWUIl1o4X20_Ady5BWTjqAf2B/view?usp=sharing

## 🛠️ Tech Stack

**Vite** · **TypeScript** · **React 18** · **MUI 6** · **Axios** · **DOMPurify** · **js-beautify** · **PrismJS** · **react-color** · **Jest** · **ESLint** · **Prettier** · **Husky** · **GitHub Actions** · **Functional Programming** · **Composable Design** · **GPT-4**

## 🖱️ Features

- **✨ Modern, User-Friendly Design**  
  A sleek, interactive interface offering a clean and intuitive user experience across all devices.

- **🔄 Dual Button Generators**

  - **Basic Generator**: Customizes buttons with inputs for color (supports color picking and text), size, and content.
  - **Themed Generator**: Includes a dropdown for predefined styles (e.g., "minimal," "modern") and free text for button labels.

- **👀 Preview and Code View**  
  Displays the generated button and its HTML/CSS code for easy integration.

- **📱 Responsive Design**  
  Works seamlessly on mobile, tablet, and desktop devices.

- **🔒 Security Measures**

  - Filters harmful characters from inputs.
  - Sanitizes API-generated HTML.

- **🔧 Scalable Architecture**  
  Designed to easily support future components and features.

- **📐 Edge Case Handling**  
  Handles vague inputs like "very dark" colors or "super huge" sizes intelligently.

## 🚀 How to Use

- Clone the Repository

  ```bash
  git clone https://github.com/mohammadAgbaryya/buttons-generator.git
  ```

- Navigate to the project directory and install dependencies:

  ```bash
  cd buttons-generator
  npm install
  ```

- Create a .env file in the root directory with the following content:

  ```bash
  VITE_OPENAI_API_KEY=your_open_ai_api_key
  ```

- Start the development server:

  ```bash
  npm run dev
  ```

## 🖥️ Access the App Locally

After starting the development server, open your browser and navigate to: [http://localhost:5173](http://localhost:5173)

## 🌐 Access on GitHub Pages

You can access the deployed app directly on GitHub Pages using this link: [**Live Demo**](https://mohammadagbaryya.github.io/buttons-generator)

## 🔧 What to Improve / Add in the Future

- **Add Tests**: Include unit tests and end-to-end (E2E) tests to ensure the app's functionality and robustness.
- **Observability**: logs, metrics, and monitoring tools for better debugging and analysis.
- **Accessibility**: Implement features to make the app accessible to all users, including those with disabilities.
- **Multi-Language Support**: Add support for multiple languages to make the app usable for a global audience.
- **Security Measures**: Implement a backend API to serve the UI, providing enhanced security and improved control over input validation and server-side processes.

## 🚨 Important Notes

- This repository contains only client-side code. It is designed this way for simplicity and faster deployment using GitHub Pages, as no server is required.

- While the app functions effectively, for enhanced security and better control over input validation and other server-side processes, implementing a middleware server (e.g., a Backend-for-Frontend [BFF] or proxy) would be an excellent addition. This approach would provide extra layers of security and handle server-related tasks more robustly.

## 📧 Contact

Have questions, feedback, or suggestions? Feel free to reach out! Email: [mohammad.agbaryya@gmail.com](mailto:mohammad.agbaryya@gmail.com)
