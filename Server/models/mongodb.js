const mongoose = require("mongoose");

const mySqlSchema = new mongoose.Schema({
	uri: { type: String, required: true  },
	database: { type: String, required: true },
	collection: { type: String, required: true },
});


module.exports = mongoose.model("mongoDB", mongoDBSchema);
