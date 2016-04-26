define([
	'jquery',
	'underscore',
	'backbone',
	'text!/templates/home/home.html'
], function($, _, Backbone, HomeTemplate) {
	var homeView = Backbone.View.extend({
		el: '#container',

		render: function() {
			var self = this;

			self.$el.html(HomeTemplate);
		}
	});

	return homeView;
});