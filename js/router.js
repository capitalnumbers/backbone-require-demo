// All routes are listed here

define([
	'jquery',
	'underscore',
	'backbone',
	'HomeView',
	'ProjectListView',
	'UserListView',
	'ExceptionView'
], function($, _, Backbone, HomeView, ProjectListView, UserListView, ExceptionView) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			// URL routes
			'': 'showHome',
			'projects': 'showProjects',
			'users': 'showUsers',

			// Default / unmatched route
			'*actions': 'defaultAction'
		},

		showHome: function() {
			var homeView = new HomeView();

			homeView.render();
		},

		showProjects: function() {
			var projectListView = new ProjectListView();
			projectListView.render();
		},

		showUsers: function() {
			var userListView = new UserListView();
			userListView.render();
		},

		defaultAction: function(actions) {
			var exceptionView = new ExceptionView();
			exceptionView.render();
			console.log('No routes: ', actions);
		}
	});

	var initialize = function() {
		var app_router = new AppRouter;

		Backbone.history.start({
			// pushState: true
		});
	};

	return {
		initialize: initialize
	};
})