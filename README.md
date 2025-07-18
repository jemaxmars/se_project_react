# 👕 WTWR (What To Wear)

## 🧭 Objective

WTWR (What To Wear) is a React-based frontend application that recommends weather-appropriate clothing based on real-time data from a Weather API. This project is the frontend portion of a full-stack application.

In this sprint, I focused on building **core UI functionality and integrating with a mock API**, setting the stage for future backend development and advanced features. 

In the previous sprint, I focused on building the **frontend UI and core functionality**, including temperature-based clothing suggestions, responsive layout, and API integration.

---

## 🚀 Key Features Implemented (This Sprint)

The following key features have been implemented and refined:

-   ✅ **Temperature Unit Toggle Switch:** Users can now switch between **Fahrenheit (°F)** and **Celsius (°C)** measurements for temperature display using a custom-styled toggle switch. This uses **React Context** for global state management.
-   🗺️ **Profile Page Route:** A dedicated `/profile` page has been implemented using **React Router**, displaying all clothing items and user information.
-   🔗 **Mock API Integration:**
    * A **mock server (json-server)** is set up to mimic a backend API for clothing items.
    * **GET /items:** All clothing items are now fetched from the mock server and displayed in the application state. Default hardcoded items have been removed.
    * **POST /items:** Users can **add new clothing items** through a dedicated form. Data is submitted to the mock server and immediately reflected in the UI.
    * **DELETE /items/:id:** Users can **delete clothing items**, with changes persisted on the mock server and immediately updated in the UI. A **custom confirmation modal** enhances user experience for deletion.
-   📝 **Form Submission & Validation:** The "Add New Garment" form uses **controlled components** for managing input data and includes robust **client-side validation** to ensure required fields are filled and image URLs are valid before submission.

---

## 💡 Project Features (Overall)

Beyond the core objectives of this sprint, the application includes:

-   👕 **Clothing Item Cards:** Dynamically rendered from API data.
-   ☁️ **OpenWeatherMap API Calls:** Fetches current temperature (Fahrenheit & Celsius), location name, daytime/nighttime status, and weather condition.
-   📍 **Location & Temperature Display:** Current location and temperature are shown in the header and weather card.
-   🔍 **Temperature-Based Filtering:** Clothing items are filtered based on the current weather type on the main page.
-   ➕ **New Garment Modal:** Opens and closes for adding items.
-   🖼️ **Image Modal:** Appears when a clothing card is clicked.
-   👍 **Static Like Icon:** Present on each clothing card (functionality pending).
-   📱 **Responsive Design:** Adapts to all screen sizes.

---

## 🎨 Design & UI

The application faithfully follows the **Figma design specs** for the WTWR project.

-   A comprehensive **UI Kit** for typography, spacing, and button styles.
-   Hover states for buttons and cards.
-   Responsive, mobile-first layout.
-   Clean and consistent design system.
-   Custom-designed toggle switch and confirmation modal enhance user interaction.

---

## 💻 Tech Stack

-   **React** (via [Vite](https://vitejs.dev/))
-   **React Router v6** (for client-side routing)
-   **JavaScript (ES6+)**
-   **CSS Modules** (for component-scoped styling)
-   **OpenWeatherMap API** (external source for weather data)
-   **json-server** (mock REST API for clothing item data)
-   **Figma** (for design and UI reference)

---

## 🌦️ Weather API Integration

Weather data is fetched in real-time when the user visits the app.

### Data retrieved:

-   `temperature.F` – current temperature in Fahrenheit
-   `temperature.C` – current temperature in Celsius (newly implemented)
-   `isDay` – whether it's daytime or nighttime
-   `condition` – the current weather condition (e.g., rain, clear, snow)

This data is used to determine the background image, display weather data, and filter the clothing items shown.

---

## 👕 Clothing Data

Clothing items are now dynamically fetched from and persisted on a **mock JSON server**.

### Each item includes:

-   `_id`: Unique identifier (managed by json-server).
-   `name`: The garment name (e.g., "T-Shirt", "Jacket").
-   `weather`: The category the item is suited for (`hot`, `warm`, `cold`).
-   `imageUrl`: Image URL for the clothing item (used for display and submission).

Items are dynamically filtered based on the current weather temperature, or all are shown on the profile page.

---

## 📱 Responsive Design

-   Mobile-first development approach.
-   Fully responsive layout across mobile, tablet, and desktop.
-   CSS Modules used for component-scoped styling.

---

## 🔮 Future Sprints (Planned Features)

-   ❤️ **Like and unlike clothing cards** (implementing dynamic likes).
-   👤 **Implement user authentication and profiles** (beyond hardcoded data).
-   ☁️ **Connect to a real backend database** (replacing json-server).
-   ✨ **Advanced user personalization and preferences.**



**Note:** This version is intended for local development with `json-server` and will not work correctly if deployed to platforms like GitHub Pages without a live backend.

---

## 🛠️ Development Tools

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh.
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.
```