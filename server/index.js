import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";
import edenRoutes from "./routes/edenai.routes.js";

dotenv.config(); // setup environment variables

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/dalle", dalleRoutes);
app.use("/api/v2/edenai", edenRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

app.listen(8080, () => {
  console.log("Server has started.");
});
