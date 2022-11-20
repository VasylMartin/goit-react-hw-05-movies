const BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = 'c94ed818fbf8fe0b53e7b4cc0b2e0092'

const media_type = 'all'
const time_window = 'day'

export async function fetchTrendings() {
    const response = await fetch(`${BASE_URL}/trending/${media_type}/${time_window}?api_key=${API_KEY}`)
    if(response.ok) {
        return response.json()
    }
}