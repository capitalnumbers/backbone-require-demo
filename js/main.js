// Configure shortcut alias with Require.js

require.config({
	paths: {
		/** Libraries **/
		jquery: 'libs/jquery/jquery-2.2.3.min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min',
		text: 'libs/require/require-text',

		/** Views **/
		HomeView: 'views/home/homeView',
		ProjectListView: 'views/projects/list',
		UserListView: 'views/users/list',
		ExceptionView: 'views/common/exception',

		/** Models **/
		ProjectModel: 'models/project',

		/** Collections **/
		ProjectsCollection: 'collections/projects',
	}
});

require(['app'], function(App) {
	App.initialize();
});