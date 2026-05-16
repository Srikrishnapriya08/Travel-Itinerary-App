import axios from "axios";

// Backend base URL
const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

// Axios instance
const http = axios.create({
  baseURL: API_BASE,
  headers: { "Content-Type": "application/json" },
});

// Attach JWT token automatically if present
http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ==================== AUTH ====================
export const registerUser = (userData) => http.post("/auth/register", userData);
export const loginUser = (loginUserData) => http.post("/auth/login", loginUserData);
export const logoutUser = (refreshToken) =>
  http.post("/auth/logout", { refreshToken });
export const refreshToken = (refreshToken) =>
  http.post("/auth/refresh", { refreshToken });

// ==================== USERS ====================
export const fetchUsers = () => http.get("/api/users");
export const fetchUserById = (id) => http.get(`/api/users/${id}`);
export const createUser = (userData) => http.post("/api/users", userData);
export const updateUser = (id, updatedData) =>
  http.put(`/api/users/${id}`, updatedData);
export const deleteUser = (id) => http.delete(`/api/users/${id}`);

// ==================== ITINERARY ====================
export const fetchItineraries = () => http.get("/api/itinerary");
export const fetchItineraryByTripName = (tripName) =>
  http.get(`/api/itinerary/${tripName}`);
export const createItinerary = (event, userId) =>
  http.post(`/api/itinerary?userId=${userId}`, event);
export const updateItinerary = (id, updatedEvent) =>
  http.put(`/api/itinerary/${id}`, updatedEvent);
export const deleteItinerary = (id) =>
  http.delete(`/api/itinerary/${id}`);

// ==================== BOOKINGS ====================
export const fetchBookings = () => http.get("/api/bookings");
export const fetchBookingById = (id) => http.get(`/api/bookings/${id}`);
export const createBooking = (booking) => http.post("/api/bookings", booking);
export const updateBooking = (id, updatedBooking) =>
  http.put(`/api/bookings/${id}`, updatedBooking);
export const deleteBooking = (id) => http.delete(`/api/bookings/${id}`);

// ==================== DESTINATIONS ====================
export const fetchDestinations = () => http.get("/api/destinations");
export const fetchDestinationById = (id) =>
  http.get(`/api/destinations/${id}`);
export const createDestination = (destination) =>
  http.post("/api/destinations", destination);
export const updateDestination = (id, updatedDestination) =>
  http.put(`/api/destinations/${id}`, updatedDestination);
export const deleteDestination = (id) =>
  http.delete(`/api/destinations/${id}`);

// ==================== EXPENSES ====================
export const fetchExpenses = () => http.get("/api/expenses");
export const fetchExpenseById = (id) => http.get(`/api/expenses/${id}`);
export const createExpense = (expense) => http.post("/api/expenses", expense);
export const updateExpense = (id, updatedExpense) =>
  http.put(`/api/expenses/${id}`, updatedExpense);
export const deleteExpense = (id) => http.delete(`/api/expenses/${id}`);

// ==================== ACTIVITIES ====================
export const fetchActivities = () => http.get("/api/activities");
export const fetchActivityById = (id) => http.get(`/api/activities/${id}`);
export const createActivity = (activity) => http.post("/api/activities", activity);
export const updateActivity = (id, updatedActivity) =>
  http.put(`/api/activities/${id}`, updatedActivity);
export const deleteActivity = (id) => http.delete(`/api/activities/${id}`);
