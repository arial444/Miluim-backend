/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /soldier': {
    controller: 'soldier',
    action: 'get',
  },

  'GET /soldier/:id': {
    controller: 'soldier',
    action: 'view',
  },

  'POST /soldier': {
    controller: 'solider',
    action: 'create',
  },

  'PATCH /soldier/:id': {
    controller: 'soldier',
    action: 'update',
  },

  'GET /assign': {
    controller: 'AssignController',
    action: 'get',
  },

  'GET /assign/:id': {
    controller: 'AssignController',
    action: 'view',
  },

  'POST /assign': {
    controller: 'AssignController',
    action: 'create',
  },

  'PATCH /assign/:id': {
    controller: 'AssignController',
    action: 'update',
  },

  'GET /department': {
    controller: 'DepartmentController',
    action: 'get',
  },

  'GET /department/:id': {
    controller: 'DepartmentController',
    action: 'view',
  },

  'POST /department': {
    controller: 'DepartmentController',
    action: 'create',
  },

  'PATCH /department/:id': {
    controller: 'DepartmentController',
    action: 'update',
  },

  'GET /item': {
    controller: 'ItemController',
    action: 'get',
  },

  'GET /item/:id': {
    controller: 'ItemController',
    action: 'view',
  },

  'POST /item': {
    controller: 'ItemController',
    action: 'create',
  },

  'PATCH /item/:id': {
    controller: 'ItemController',
    action: 'update',
  },

  'GET /rank': {
    controller: 'RankController',
    action: 'get',
  },

  'GET /rank/:id': {
    controller: 'RankController',
    action: 'view',
  },

  'POST /rank': {
    controller: 'RankController',
    action: 'create',
  },

  'PATCH /rank/:id': {
    controller: 'RankController',
    action: 'update',
  },

  'GET /sign': {
    controller: 'SignController',
    action: 'get',
  },

  'GET /sign/:id': {
    controller: 'SignController',
    action: 'view',
  },

  'POST /sign': {
    controller: 'SignController',
    action: 'create',
  },

  'PATCH /sign/:id': {
    controller: 'SignController',
    action: 'update',
  },

  'DELETE /sign/:id': {
    controller: 'SignController',
    action: 'delete',
  },

  'GET /soldierassign': {
    controller: 'SoldierAssignController',
    action: 'get',
  },

  'GET /soldierassign/:id': {
    controller: 'SoldierAssignController',
    action: 'view',
  },

  'POST /soldierassign': {
    controller: 'SoldierAssignController',
    action: 'create',
  },

  'PATCH /soldierassign/:id': {
    controller: 'SoldierAssignController',
    action: 'update',
  },

  'GET /itemset': {
    controller: 'ItemSetController',
    action: 'get',
  },

  'GET /itemset/:id': {
    controller: 'ItemSetController',
    action: 'view',
  },

  'POST /itemset': {
    controller: 'ItemSetController',
    action: 'create',
  },

  'PATCH /itemset/:id': {
    controller: 'ItemSetController',
    action: 'update',
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
