'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GenresCreateSchema extends Schema {
  up () {
    this.create('genres_creates', (table) => {
      table.increments()
      table.string('name', 100).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('genres')
  }
}

module.exports = GenresCreateSchema
