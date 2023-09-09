import axios from 'axios';
const API_KEY = 'f0e6b0abf3fe4c3cb49744ac4cb9242f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGU2YjBhYmYzZmU0YzNjYjQ5NzQ0YWM0Y2I5MjQyZiIsInN1YiI6IjY0ZWYzMzY5OTdhNGU2MDExYmFlZGIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhel04NCmJii4_To7PXoEua5ILbgvRLNlfNsFR_FR-s';
const options = {
  headers: {
    accept: 'application/json',
  },
};
const params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrending = async () => {
  try {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const searchMovies = async movieName => {
  try {
    const response = await axios.get(`/search/movie?query=${movieName}`, {
      options,
      params,
    });
    console.log(response);
    if (response) {
      const data = response.data.results;
      console.log(data);
      return data;
    } else {
      throw new Error('Error fetching movies:');
    }
  } catch (error) {
    console.log(error);
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
