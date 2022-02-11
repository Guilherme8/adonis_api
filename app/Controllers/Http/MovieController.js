// libs
const Axios = use('axios');

// models
const Movie = use('App/Models/Movie');
const Genre = use('App/Models/Genre');

// params
const urlPopularMovies = 'https://imdb8.p.rapidapi.com/title/get-most-popular-movies';
const urlFindMovie = 'https://imdb8.p.rapidapi.com/title/get-overview-details';
const UrlPopularMoviesGenre = 'https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre';

class MovieController {

    // listing popular movies 
    async index({response}) {
        try{

            // call api imdb
            const popularMovies = await Axios.get(urlPopularMovies, {
                params: {homeCountry: 'US', purchaseCountry: 'US', currentCountry: 'US'},
                headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': '3effff66c6mshf7b825bdb88a5ccp1be104jsnfcd550196d68'
                  }
            }).then(function (response) {
                return { data: response.data, status: response.status };
            }).catch(function (error) {
                return { data: error.response.statusText, status: error.response.statu };
            });
            
            return response.status(popularMovies.status).send(popularMovies.data);

        } catch (error) {
            return response.status(500).send({error: error.message});
        }
    }

    // find movie by title 
    async show({request, response}) {
        try{

            // Params
            const { title: title,  user_id} = request.get();

            // call api imdb
            const popularMovies = await Axios.get(urlFindMovie, {
                params: {tconst: `${title}`, currentCountry: 'US'},
                headers: {
                    'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                    'x-rapidapi-key': '3effff66c6mshf7b825bdb88a5ccp1be104jsnfcd550196d68'
                  }
            }).then(function (response) {
                return { data: response.data, status: response.status };
            }).catch(function (error) {
                return { data: error.response.statusText, status: error.response.statu };
            });

            const dataMovie = popularMovies.data.title.title

            const dataGenre = popularMovies.data.genres

            // Store movies
            const movie = await Movie.create(dataMovie);

            // associa movies a users
            await movie.users().sync(user_id, null);

            // Store genres
            const genres = await Genre.createMany(dataGenre);

            // associa genres a movies
            await genres.users().sync(movie, null);
            
            return response.status(popularMovies.status).send(popularMovies.data);

        } catch (error) {
            return response.status(500).send({error: error.message});
        }
    }

    // indicar movie by genre
    async suggest({request, response}) {
        try{
            // Params
            const { genre: genre} = request.get();

            // call api imdb
            const popularMoviesByGenre = await Axios.get(UrlPopularMoviesGenre, {
                params: {genre: `/chart/popular/genre/adventure/${genre}`},
                headers: {
                  'x-rapidapi-host': 'imdb8.p.rapidapi.com',
                  'x-rapidapi-key': '3effff66c6mshf7b825bdb88a5ccp1be104jsnfcd550196d68'
                }
            }).then(function (response) {
                return { data: response.data, status: response.status };
            }).catch(function (error) {
                return { data: error.response.statusText, status: error.response.statu };
            });
            
            return response.status(popularMoviesByGenre.status).send(popularMoviesByGenre.data);

        } catch (error) {
            return response.status(500).send({error: error.message});
        }
    }
}

module.exports = MovieController
