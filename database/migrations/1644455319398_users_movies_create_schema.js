'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersMoviesCreateSchema extends Schema {
  up () {
    this.create('users_movies_creates', (table) => {
      table.integer('id_user').unsigned().references('id').inTable('users')
      table.integer('id_movie').unsigned().references('id').inTable('movies')
    })
  }

  down () {
    this.drop('users_movies_creates')
  }
}

module.exports = UsersMoviesCreateSchema
