'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Movie extends Model {

  // relationship
  genres () {
    return this.belongsToMany(
      'App/Models/Genre',
      'id_movie',
      'id_genre'
    ).pivotModel('App/Models/MovieGenre')
  }

  users () {
    return this.belongsToMany(
      'App/Models/User',
      'id_movie',
      'id_user'
    ).pivotModel('App/Models/UserMovie')
  }
}

module.exports = Movie
