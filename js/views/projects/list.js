define([
	'jquery',
	'underscore',
	'backbone',
	'ProjectsCollection',
	'text!/templates/projects/list.html'
], function($, _, Backbone, ProjectsCollection, ProjectListTemplate) {
	var ProjectListView = Backbone.View.extend({
		el: $('#container'),

		initialize: function(options) {
			var self = this;

			self.projects = new ProjectsCollection();
			self.addProjects();
		},

		render: function() {
			var self = this;
			var data = self.projects.models;
			var compiledTemplate = _.template(ProjectListTemplate)({projects: data});

			self.$el.html(compiledTemplate);
		},

		addProjects: function() {
			var self = this;

			self.projects.add([
				{name: 'Ginger Kids'},
				{name: 'Harry Porter'},
			]);
		}
	});

	return ProjectListView;
});