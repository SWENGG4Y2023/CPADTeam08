import express from "express";
import run from "../utilities/gemini/api.mjs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("GET request received");
  res.send("Welcome to my server!");
});

app.post("/status", async (request, response) => {
  const image = request.params.image;
  const prompt = request.params.prompt;

  const result = await run(image, prompt);
  console.log(result);
  response.send(result);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
