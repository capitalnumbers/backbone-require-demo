// Our applications main module should always remain light weight.
// This tutorial only covers setting up a Backbone Router and initializing it in our main module.
// The router will then load the correct dependencies depending on the current URL.

define([
	'jquery',
	'underscore',
	'backbone',
	'router' // Request router.js
], function($, _, Backbone, Router) {
	var initialize = function() {
		// Pass in our Router module and call it's initialize function
		Router.initialize();
	};

	return {
		initialize: initialize
	};
});