import axios from 'axios';

// Base URL for the GitHub API
const API_URL = 'https://api.github.com';

/**
 * Fetches user data from the GitHub API.
 * @param {string} username The GitHub username to search for.
 * @returns {Promise<object|null>} A promise that resolves to the user data or null if not found.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      // User not found, return null to handle this case gracefully in the component
      return null;
    }
    // Handle other errors (e.g., network issues)
    console.error('API Error:', error);
    throw error;
  }
};

export default fetchUserData;