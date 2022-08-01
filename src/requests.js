const API_KEY = "5548a300a2221d094bf7b4391f0ce8ba";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;