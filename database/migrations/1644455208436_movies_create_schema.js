'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesCreateSchema extends Schema {
  up () {
    this.create('movies_creates', (table) => {
      table.increments()
      table.string('name', 100).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MoviesCreateSchema
