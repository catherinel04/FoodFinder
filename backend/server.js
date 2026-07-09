const express = require("express");
const cors = require("cors");
const restaurantsRouter = require("./routes/restaurants");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "What-to-eat API is running." });
});

app.use("/api/restaurants", restaurantsRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

app.listen(PORT, () => {
  console.log(`What-to-eat API listening on http://localhost:${PORT}`);
});
