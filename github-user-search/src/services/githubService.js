import axios from 'axios';

// Base URL for the GitHub API user endpoint
const GITHUB_API_BASE_URL = 'https://api.github.com/users/';

/**
 * Fetches user data from the GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} - A promise that resolves to the user data object.
 */
export const fetchUserData = async (username) => {
  if (!username) {
    throw new Error("Username cannot be empty.");
  }

  // Construct the full API URL
  const url = `${GITHUB_API_BASE_URL}${username}`;

  try {
    // Send a GET request to the GitHub API
    const response = await axios.get(url);
    
    // The API returns 200 for success, and the data is in response.data
    return response.data;
  } catch (error) {
    // GitHub API returns 404 for "User not found"
    // We check for the error response status to provide a specific message
    if (error.response && error.response.status === 404) {
      throw new Error("Looks like we can't find the user.");
    }
    
    // For other errors (e.g., network issues, rate limiting)
    throw new Error("An error occurred while fetching data.");
  }
};