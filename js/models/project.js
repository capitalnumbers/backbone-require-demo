define([
	'underscore',
	'backbone'
], function(_, Backbone) {
	var ProjectModel = Backbone.Model.extend({
		defaults: []
	});

	return ProjectModel;
});