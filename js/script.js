import { Genre } from "../components/Genre.js"
import { Movie, SetMovie } from "../components/Movie.js"
import { movies } from "./db.js"
import { reload } from "./utils.js"

const genres = ["All", ...new Set(movies.map(item => item.genre))] // set

const moviesPlace = document.querySelector('.promo__interactive-list')
const genresPlace = document.querySelector('.promo__menu-list ul')

SetMovie(movies[0])
reload(movies, moviesPlace, Movie)
reload(genres, genresPlace, Genre)





function searchMovies(query) {
    const filterMov = movies.filter(movie => {
        return movie.title.toLowerCase().includes(query)
    })

    const moviesPlace = document.querySelector('.promo__interactive-list')
    reload(filterMov, moviesPlace, Movie)
    SetMovie(filterMov[0])
}

const search = document.querySelector('.header__search input')
search.oninput = (event) => {
    searchMovies(event.target.value)
}

