import axios from 'axios';
const API_KEY = 'f0e6b0abf3fe4c3cb49744ac4cb9242f';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGU2YjBhYmYzZmU0YzNjYjQ5NzQ0YWM0Y2I5MjQyZiIsInN1YiI6IjY0ZWYzMzY5OTdhNGU2MDExYmFlZGIxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhel04NCmJii4_To7PXoEua5ILbgvRLNlfNsFR_FR-s',
  },
};

const params = {
  key: API_KEY,
};

export const getTrending = async () => {
  try {
    const response = await axios.get(
      `/trending/movie/day?language=en-US`,
      options,
      params
    );

    console.log(response);
    if (response) {
      const data = response.data;
      console.log(data);
      return data;
    } else {
      throw new Error('Error fetching movies');
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const searchMovies = async (query, page) => {
  try {
    const response = await axios.get(`/search/movie?language=en-US`, {
      params: {
        api_key: API_KEY,
        query: query,

        language: 'en-US',
        page: page,
      },
    });

    if (response.status === 200) {
      const data = response.data;
      return data.results;
    } else {
      throw new Error('Error fetching movies');
    }
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const getMovieDetails = async movie_id => {
  try {
    const response = await axios.get(`/movie/${movie_id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies');
    throw error;
  }
};

export const getMovieCredits = async movie_id => {
  try {
    const response = await axios.get(
      `movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies');
    throw error;
  }
};

export const getMovieReviews = async movie_id => {
  try {
    const response = await axios.get(
      `movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movies');
    throw error;
  }
};
