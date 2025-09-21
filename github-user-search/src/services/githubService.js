import axios from 'axios';

const API_URL = 'https://api.github.com';

/**
 * Performs an advanced search for GitHub users.
 * @param {object} params - Search parameters.
 * @param {string} params.username - The username to search for.
 * @param {string} [params.location] - Optional location filter.
 * @param {string} [params.minRepos] - Optional minimum repositories count.
 * @returns {Promise<object[]|null>} A promise resolving to an array of user objects or null.
 */
export const fetchUsers = async ({ username, location, minRepos }) => {
  if (!username) {
    return null;
  }

  // Construct the search query string
  let query = `${username} in:login`; // Use "in:login" to search for usernames
  if (location) {
    query += ` location:${location}`;
  }
  if (minRepos) {
    query += ` repos:>=${minRepos}`;
  }

  try {
    const response = await axios.get(`${API_URL}/search/users?q=${encodeURIComponent(query)}`);
    return response.data.items; // The search API returns results in the 'items' array
  } catch (error) {
    if (error.response && error.response.status === 403) {
      console.error("API Rate Limit Exceeded.");
      throw new Error("API rate limit exceeded. Please try again later.");
    }
    console.error('API Error:', error);
    throw error;
  }
};
