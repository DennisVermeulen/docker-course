import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    message: "No database connected — static response.",
  });
});

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`);
});

