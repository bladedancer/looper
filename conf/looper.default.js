/**
 * Configuration used by the GreetFlow. 'saluation' is accessed via '$.helloworld.salutation'
 * similarly any APIBuilder.config parameter can be accessed.
 */
module.exports = {
	looper: {
		url: process.env.URL || 'http://localhost:8080/api'
	}
};
