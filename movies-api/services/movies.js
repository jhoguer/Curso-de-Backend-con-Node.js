const Mongolib = require('../lib/mongo');

class MoviesServices {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new Mongolib();
  }
  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } }
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId)
    return movie || {};
  }

  async createMovie({ movie }) {
    const createMovieId = await this.mongoDB.create(this.collection, movie);
    return createMovieId;
  }

  async updateMovie({ movieId, movie} = {}) {
    const upodateMovieId = await this.mongoDB.update(this.collection, movieId, movie)
    return upodateMovieId;
  }

  async updatePartialMovie({ movieId, movie} = {}) {
    const updatePartialMovieId = await this.mongoDB.update(this.collection, movieId, movie)
    return updatePartialMovieId;
  }

  async deleteMovie({ movieId }) {
    const deleteMovieId = await this.mongoDB.delete(this.collection, movieId);
    return deleteMovieId;
  }

}

module.exports = MoviesServices;