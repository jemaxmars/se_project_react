# 👕 WTWR (What To Wear)

## 🧭 Objective

WTWR (What To Wear) is a React-based frontend application that recommends weather-appropriate clothing based on real-time data from a Weather API. This project is the frontend portion of a full-stack application.

The current sprint focuses on building the **frontend UI and core functionality**, including temperature-based clothing suggestions, responsive layout, and API integration.

---

## 🧩 Project Overview

The following features have been implemented in this sprint:

- ✅ A set of **clothing item cards** rendered from a hard-coded dataset
- ✅ A call to the **Weather API** on page load to:
  - Fetch the **current temperature** in Fahrenheit
  - Retrieve the **location name** based on hardcoded coordinates
- ✅ Display of **current location and temperature** in the header and weather card
- ✅ **Temperature-based filtering** of clothing items
- ✅ A **New Garment modal** that opens and closes
- ✅ An **Image modal** that appears when a clothing card is clicked
- ✅ A **static like icon** on each clothing card (no functionality yet)
- ✅ **Responsive design** that adapts to all screen sizes

---

## 🖼️ Design & UI

The application follows the **Figma design specs** for the WTWR project.

- A comprehensive **UI Kit** for typography, spacing, and button styles
- Hover states for buttons and cards
- Responsive, mobile-first layout
- Clean and consistent design system

---

## 📦 Tech Stack

- **React** (via [Vite](https://vitejs.dev/))
- **JavaScript (ES6+)**
- **CSS Modules**
- **Weather API** (external source)
- **Figma** (for design and UI reference)

---

## 🌦️ Weather API Integration

Weather data is fetched in real-time when the user visits the app.

### Data retrieved:

- `temperature.F` – current temperature in Fahrenheit
- `isDay` – whether it's daytime or nighttime
- `condition` – the current weather condition (e.g., rain, clear, snow)

This data is used to determine the background image, display weather data, and filter the clothing items shown.

---

## 👕 Clothing Data

Clothing cards are currently rendered from a hardcoded array of objects.

### Each item includes:

- `name`: The garment name (e.g., "T-Shirt", "Jacket")
- `weather`: The category the item is suited for (`hot`, `warm`, `cold`)
- `link`: Image URL for the clothing item

Items are dynamically filtered based on the current weather temperature.

---

## 📱 Responsive Design

- Mobile-first development approach
- Fully responsive layout across mobile, tablet, and desktop
- CSS Modules used for component-scoped styling

---

## 🔜 Future Sprints (Planned Features)

- ➕ **Add new clothing items** to the gallery
- ❤️ **Like and unlike clothing cards**
- 🗑️ **Delete clothing items**
- 👤 **Implement user authentication and profiles**
- 💾 **Save personalized clothing preferences**
- 🌡️ **Toggle between °F and °C temperature units**

---

## 🔗 Live Demo

You can view the deployed WTWR application here:

👉 [WTWR on GitHub Pages](https://jemaxmars.github.io/se_project_react/)

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
