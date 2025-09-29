import { useEffect, useState, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  getItems,
  addItem,
  deleteItem,
  registerUser,
  loginUser,
  likeItem,
  dislikeItem,
  updateProfile,
  getUserProfile,
} from "../../utils/api";
import { getUserInfo } from "../../utils/auth";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
    condition: "",
    isDay: false,
  });

  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState(""); // "" | "register" | "login"
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isWeatherDataLoaded, setIsWeatherDataLoaded] = useState(false);
  const [isConfirmModalOpened, setIsConfirmModalOpened] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwt") || "");
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);

  const location = useLocation();
  const isProfilePage = location.pathname === "/profile";

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPreviewModalOpen(true);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }) => {
    const token = localStorage.getItem("jwt");
    addItem({ name, imageUrl, weather }, token)
      .then((newItem) => {
        setClothingItems((prev) => [newItem, ...prev]);
        closeActiveModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  // This is for direct delete from preview modal (not confirm modal)
  const handleDeleteItem = (itemId) => {
    const token = localStorage.getItem("jwt");
    deleteItem(itemId, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
        setIsPreviewModalOpen(false);
        setIsConfirmModalOpened(false);
      })
      .catch((err) => {
        console.error("Delete failed:", err);
      });
  };

  // This opens the confirm modal and sets the item to delete
  function handleDeleteClick(itemId) {
    setItemToDelete(itemId);
    setIsConfirmDeleteOpen(true);
  }

  // This is called when user confirms delete in the confirm modal
  function handleConfirmDelete() {
    const token = localStorage.getItem("jwt");
    deleteItem(itemToDelete, token)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemToDelete)
        );
        setIsPreviewModalOpen(false); // <-- Close the item preview modal
        handleCloseConfirmDelete();
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Error confirming delete:", err);
      });
  }

  function handleCloseConfirmDelete() {
    setIsConfirmDeleteOpen(false);
    setItemToDelete(null);
  }

  const handleRegister = (formData) => {
    registerUser(formData).then((res) => {
      closeActiveModal();
      handleLogin({ email: formData.email, password: formData.password });
    });
  };

  function handleLogin(loginResponse) {
    // loginResponse contains { token: ... }
    localStorage.setItem("jwt", loginResponse.token);
    getUserProfile(loginResponse.token)
      .then((userData) => {
        setCurrentUser(userData); // userData should have .name
      })
      .catch((err) => {
        // handle error if needed
      });
  }

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (!isLiked) {
      likeItem(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    } else {
      dislikeItem(id, token)
        .then((updatedCard) => {
          setClothingItems((cards) =>
            cards.map((item) => (item._id === id ? updatedCard : item))
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleUpdateProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    updateProfile({ name, avatar }, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        setIsEditProfileOpen(false);
      })
      .catch((err) => {
        console.error("Profile update failed:", err);
      });
  };

  const handleSignUpClick = () => setActiveModal("register");
  const handleLoginClick = () => setActiveModal("login");
  const handleCloseModal = () => {
    setIsPreviewModalOpen(false);
    setActiveModal("");
  };

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    setCurrentUser(null);
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getUserInfo(jwt)
        .then((user) => {
          setToken(jwt);
          setCurrentUser(user);
          setIsLoggedIn(true);
        })
        .catch(() => {
          localStorage.removeItem("jwt");
          setToken("");
          setCurrentUser(null);
          setIsLoggedIn(false);
        });
    }
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
        setIsWeatherDataLoaded(true);
      })
      .catch((error) => {
        console.error("Failed to fetch weather data:", error);
        setIsWeatherDataLoaded(false);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Failed to fetch clothing items:", error);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              currentUser={currentUser}
              onSignUpClick={handleSignUpClick}
              onLoginClick={handleLoginClick}
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              isProfilePage={isProfilePage}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardLike={handleCardLike} // <-- Make sure this is here
                    onSignUpClick={handleSignUpClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute token={token}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      onAddClick={handleAddClick}
                      setIsEditProfileOpen={setIsEditProfileOpen}
                      onSignOut={handleSignOut}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          {isPreviewModalOpen && (
            <ItemModal
              isOpen={isPreviewModalOpen}
              onClose={handleCloseModal}
              card={selectedCard}
              onDeleteItem={handleDeleteClick}
            />
          )}
          <ConfirmDeleteModal
            isOpen={isConfirmDeleteOpen}
            onClose={handleCloseConfirmDelete}
            onConfirm={handleConfirmDelete}
            message="Are you sure you want to delete this item? This action is irreversible."
          />
          <EditProfileModal
            isOpen={isEditProfileOpen}
            onClose={() => setIsEditProfileOpen(false)}
            onUpdateProfile={handleUpdateProfile}
          />
          {activeModal === "register" && (
            <RegisterModal
              onRegister={handleRegister}
              onClose={handleCloseModal}
              onLoginClick={handleLoginClick}
            />
          )}
          {activeModal === "login" && (
            <LoginModal
              onLogin={handleLogin}
              onClose={handleCloseModal}
              onSignUpClick={handleSignUpClick}
            />
          )}
          <Footer />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
