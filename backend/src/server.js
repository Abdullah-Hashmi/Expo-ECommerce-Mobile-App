import express from "express";

const app = express();

// app.use(express.json()); // allows reading req.body JSON

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "success" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
