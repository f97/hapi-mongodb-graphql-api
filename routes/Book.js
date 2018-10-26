const Book = require('../models/Book')

module.exports = function() {
	return [
        { 
            method: 'GET',
            path: '/api/v1/books',
            handler: function (request, h) {
                return Book.find();
            }
        },
        {
            method: 'POST',
            path: '/api/v1/books',
            handler: function (request, h) {
                const {name, author, price} = request.payload;
                const book = new Book({
                    name,
                    author,
                    price
                })
                return book.save();
            }
        },
	];
}();