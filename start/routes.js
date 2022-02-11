const Route = use('Route')

// Routes sessions
Route.post('/sessions', 'SessionController.store');

// Routes users
Route.post('/users', 'UserController.store');

// Routes movies
Route.get('/movies', 'MovieController.index');
Route.get('/find_movie', 'MovieController.show');
Route.get('/suggest_movie', 'MovieController.suggest');
