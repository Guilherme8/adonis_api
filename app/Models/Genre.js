'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genre extends Model {

    // relationship
    genres () {
        return this.belongsToMany(
          'App/Models/Movie',
          'id_genre',
          'id_movie'
        ).pivotModel('App/Models/MovieGenre')
    }
}

module.exports = Genre
