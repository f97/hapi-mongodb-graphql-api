const mongoose = require('mongoose');
const mlabURI = 'mongodb://mrsoif97:mrsoif97@ds041157.mlab.com:41157/hapi-graphql'

const con = mongoose.connect(mlabURI,{ useNewUrlParser: true }, (error) => {
	if(error){
		console.log("Error " + error);
	} else {
		console.log("Connected successfully to server")
	}
});

module.exports = con;