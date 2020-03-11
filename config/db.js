const mongoose = require('mongoose');
const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect("mongodb://datboi:6GKyzs@devconnector-shard-00-00-nlp9c.mongodb.net:27017,devconnector-shard-00-01-nlp9c.mongodb.net:27017,devconnector-shard-00-02-nlp9c.mongodb.net:27017/test?ssl=true&replicaSet=DevConnector-shard-0&authSource=admin&retryWrites=true&w=majority", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process on failure
		process.exit(1);
	}
};

module.exports = connectDB;
