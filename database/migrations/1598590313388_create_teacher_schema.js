'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateTeacherSchema extends Schema {
  up () {
    this.create('teachers', (table) => {
      table.increments('teachers_id')
      table.string("first_name", 120)
      .notNullable()
      table.string("last_name", 120)
      .notNullable()
      table.string("password", 120)
      .notNullable()
      table.string("email", 120)
      .unique()
    })
  }

  down () {
    this.drop('teachers')
  }
}

module.exports = CreateTeacherSchema
