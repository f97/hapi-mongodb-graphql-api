"use strict";

module.exports = function() {
	return [
        {
            method: 'GET',
            path: '/',
            handler: function (request, h) {
                return 'Hello!';
            }
        }
	];
}();