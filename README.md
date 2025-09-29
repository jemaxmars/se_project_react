# 👕 WTWR (What To Wear)

## 🧭 Objective

WTWR (What To Wear) is a React-based frontend application that recommends weather-appropriate clothing based on real-time data from a Weather API. This project is the frontend portion of a full-stack application.

---

## 🚀 Changes Implemented This Sprint

- **User Authentication:**

  - RegisterModal and LoginModal allow users to register and log in.
  - JWT token is stored in localStorage after login/registration.
  - On initial page load, localStorage is checked for a token; if present and valid, the user is logged in automatically.
  - Logout removes the token from localStorage and updates UI state.

- **Protected Routes:**

  - `/profile` route is protected and only accessible to authenticated users.
  - Only the current user's clothing cards are shown on the profile page.

- **User Info Display:**

  - When logged in, user information is displayed in the header and sidebar.
  - Sidebar includes buttons for logging out and opening the “change profile” modal.
  - Users can update their profile information via the “change profile” form.

- **Clothing Item Features:**

  - Users can add, edit, and delete clothing items.
  - Only cards matching the current weather condition are displayed on the main page.
  - Like/unlike functionality for clothing cards is implemented; likes persist between page loads and are reflected in the UI.

- **API Integration:**

  - All API requests (signup, signin, get user, update user, get items, add item, delete item, like/unlike item) interact with the Express backend.
  - All requests requiring authentication include the JWT token.
  - Server responses are checked for correctness; all promise chains end in a catch block.

- **Weather and UI:**

  - Weather data is fetched from the weather API on page load.
  - Temperature unit toggle switch (F/C) is implemented using React Context.
  - WeatherCard displays correct temperature, unit, and weather image.
  - Header displays current date and location (based on hard-coded coordinates).

- **Routing and Navigation:**

  - Two main routes: `/` (Main) and `/profile` (Profile).
  - Navigation links and logo click lead to correct routes.
  - Responsive design for desktop and mobile.

- **Modals:**

  - ModalWithForm, ItemModal, AddItemModal, RegisterModal, LoginModal, and EditProfileModal are implemented and styled per Figma.
  - Modals open/close via appropriate handlers.

- **Project Structure and Best Practices:**
  - All required files, folders, and components are present.
  - Code is formatted with Prettier.
  - No build or runtime errors.
  - All API and authentication logic is separated in the utils directory.
  - Functional components and hooks are used throughout.

---

## 💡 Project Features (Overall)

- 👕 Clothing Item Cards: Dynamically rendered from API data.
- ☁️ Weather API Calls: Fetches current temperature, location, and weather condition.
- 📍 Location & Temperature Display: Shown in header and weather card.
- 🔍 Temperature-Based Filtering: Clothing items filtered by weather.
- ➕ New Garment Modal: Add new items.
- 🖼️ Image Modal: View item details.
- 👍 Like/Unlike: Toggle likes on clothing cards.
- 📱 Responsive Design: Adapts to all screen sizes.

---

## 🎨 Design & UI

- Follows Figma design specs.
- UI Kit for typography, spacing, and button styles.
- Hover states for buttons and cards.
- Mobile-first, responsive layout.
- Custom toggle switch and confirmation modal.

---

## 💻 Tech Stack

- React (via [Vite](https://vitejs.dev/))
- React Router v6
- JavaScript (ES6+)
- CSS Modules
- OpenWeatherMap API
- Express backend (see below)
- Figma (for design)

---

## 🌦️ Weather API Integration

Weather data is fetched in real-time when the user visits the app.

### Data retrieved:

- `temperature.F` – current temperature in Fahrenheit
- `temperature.C` – current temperature in Celsius
- `isDay` – daytime/nighttime status
- `condition` – current weather condition

---

## 👕 Clothing Data

Clothing items are fetched from and persisted on the backend.

### Each item includes:

- `_id`: Unique identifier
- `name`: Garment name
- `weather`: Category (`hot`, `warm`, `cold`)
- `imageUrl`: Image URL

---

## 📱 Responsive Design

- Mobile-first development
- Fully responsive layout
- CSS Modules for scoped styling

---

## 🔮 Future Sprints (Planned Features)

- Advanced user personalization and preferences
- Additional weather-based recommendations

---

## 🛠️ Development Tools

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)

---

## 🗄️ Backend

This project requires the WTWR backend to be running.  
You can find the backend repository here:

[WTWR Backend Repository](https://github.com/jemaxmars/se_project_express)

Follow the instructions in the backend README to set up and run the backend server.

---

## 📦 Project Structure

- `src/components`: All React components
- `src/utils`: API, auth, constants, weatherApi
- `src/hooks`: Custom hooks (e.g., useForm)
- `src/contexts`: React Contexts
- `public`: index.html and assets
- `vendor`: normalize.css, fonts.css, fonts
- `.prettierignore`, `.gitignore`, `vite.config.js`, `.eslintrc.js`, `package.json`, etc.

---

## 📝 License

MIT

---

## 📸 Screenshots & Demo

_Add screenshots, GIFs, or a demo video here (recommended)._

---

## 🌐 Deployment

_Add a link to GitHub Pages or other deployment if available (optional)._
