const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
console.log(process.env.MONGO_URI)
const connectToMongoose = async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://manavjain3010:Manav%401234@cluster0.hboyg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Mongoose Through ${db.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
  connectToMongoose,
};
