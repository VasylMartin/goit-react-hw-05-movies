const BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = 'c94ed818fbf8fe0b53e7b4cc0b2e0092'

const media_type = 'all'
const time_window = 'day'

export async function fetchTrending() {
    const response = await fetch(
        `${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieByName(query) {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${query}`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieCast(movieId) {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieReviews(movieId) {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error('Ups! Something went wrong'));
}

export async function getMovieDetails(movieId) {
    const response = await fetch(
        `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(new Error('Ups! Something went wrong'));
}