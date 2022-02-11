'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesGenresCreateSchema extends Schema {
  up () {
    this.create('movies_genres_creates', (table) => {
      table.integer('id_movie').unsigned().references('id').inTable('movies')
      table.integer('id_genre').unsigned().references('id').inTable('genres')
    })
  }

  down () {
    this.drop('movies_genres')
  }
}

module.exports = MoviesGenresCreateSchema
