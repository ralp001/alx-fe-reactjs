import axios from 'axios';

// Access the environment variable
const GITHUB_API_URL = import.meta.env.VITE_GITHUB_API_URL;

/**
 * Searches for a GitHub user by username.
 * @param {string} username The GitHub username to search for.
 * @returns {Promise<object|null>} The user data if found, otherwise null.
 */
export const searchUser = async (username) => {
  if (!username) {
    return null; // Don't search for empty username
  }
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data; // Returns user object
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.warn(`User "${username}" not found.`);
      return null; // User not found
    }
    console.error("Error fetching user data:", error);
    // You might want to throw the error or return a specific error object
    throw error;
  }
};