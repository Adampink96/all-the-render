import express from "express";
import cors from "cors";

const app = expres();
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(8080, function () {
  console.log("server is running on port 8080");
});
