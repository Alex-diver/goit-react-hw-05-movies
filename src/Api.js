import axios from 'axios';
const API_KEY = 'f0e6b0abf3fe4c3cb49744ac4cb9242f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const searchMovies = async query => {
  try {
    const response = await axios.get(
      `/search-movies?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(
      `movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await axios.get(
      `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};
