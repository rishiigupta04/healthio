import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";

//app config

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

//middlewares

app.use(express.json());
app.use(cors());

//api endpoints

//localhost:4000/api/admin/add-doctor
app.use("/api/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("API is running fineee asf damnnnnn");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
