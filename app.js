import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import router from "./routes/api.js";
import {
  MAX_JSON_SIZE,
  URL_ENCODE,
  REQUEST_TIME,
  REQUEST_NUMBER,
  WEB_CACHE,
  DATABASE,
  PORT,
} from "./app/config/config.js";

const app = express();

// app use default middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());

// app use limiter
const limiter = rateLimit({ windowMs: REQUEST_TIME, max: REQUEST_NUMBER });
app.use(limiter);

// cache
app.set("etag", WEB_CACHE);

// database connect
mongoose
  .connect(DATABASE, { autoIndex: true })
  .then(() => {
    console.log("mongodb connect");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use("/api", router);

app.listen(PORT, () => {
  console.log("port running on 4000");
});
