define([
	'underscore',
	'backbone',
	'ProjectModel'
], function(_, Backbone, ProjectModel) {
	var ProjectCollection = Backbone.Collection.extend({
		model: ProjectModel
	});

	// You don't usually return a collection instantiated
	return ProjectCollection;
});