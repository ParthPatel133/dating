const express = require("express");
const connectToDatabase = require("./config/database");
const UserModel = require("./models/user");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req: any, res: any) => {
  console.log("Server is ready to receive requests");
  res.send("Hello World");
});

app.post("/signup", async (req: any, res: any) => {
  const { firstName, lastName, email, password, age, gender } = req.body;
  const user = new UserModel({
    firstName,
    lastName,
    email,
    password,
    age,
    gender,
  });

  try {
    await user.save();
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).send("Error saving the user: " + error.message);
  }
});

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error: any) => {
    console.error("Error connecting to database:", error);
  });
