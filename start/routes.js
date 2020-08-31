'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {

  // api route start here

  Route.get('/teachers', 'TeacherController.index')
  Route.get('/teachers/:id', 'TeacherController.index')
  Route.post('/teachers', 'TeacherController.store')

  Route.get('/groups', 'GroupController.index')
  Route.get('/groups/:id', 'GroupController.index')
  Route.post('/groups', 'GroupController.store')

  Route.get('/students', 'StudentController.index')
  Route.get('/students/:id', 'StudentController.index')
  Route.post('/students', 'StudentController.store')

  Route.get('/subjects', 'SubjectController.index')
  Route.get('/subjects/:id', 'SubjectController.index')
  Route.post('/subjects', 'SubjectController.store')

  Route.get('/enrollments', 'EnrollmentController.index')
  Route.get('/enrollments/:id', 'EnrollmentController.index')
  Route.post('/enrollments', 'EnrollmentController.store')

}).prefix('api/v1')