import express from "express";
import route from "./routes/github-routes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());

app.use(route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
