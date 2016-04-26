define([
	'jquery',
	'underscore',
	'backbone',
	'text!/templates/common/404.html'
], function($, _, Backbone, NotFoundTemplate) {
	var exceptionView = Backbone.View.extend({
		el: '#container',

		render: function() {
			var self = this;

			self.$el.html(NotFoundTemplate);
		}
	});

	return exceptionView;
});