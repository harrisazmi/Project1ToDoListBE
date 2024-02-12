const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const dburl = process.env.MONGO_DB_URL;

app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log("Ini Error YA ", e);
  });

const todoSchema = new mongoose.Schema({
  text: String,
});

const Todo = mongoose.model("Todo", todoSchema);

// API endpoints
app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/api/todos", async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});

app.delete("/api/todos", async (req, res) => {
  // Remove all todos
  await Todo.deleteMany({});
  res.json({ message: "All todos removed successfully." });
});

app.delete("/api/todos/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo removed successfully." });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
