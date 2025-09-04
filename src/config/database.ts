import mongoose = require("mongoose");

const uri =
  "mongodb+srv://parthdev133:kxZ0dcrXksz6dLw9@tinderclone.4fmie1b.mongodb.net/tinderClone";

async function connectToDatabase(): Promise<void> {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
