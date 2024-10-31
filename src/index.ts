import { Request, Response } from "express";
import { app } from "./app";

app.get("/", (req: Request, res: Response) => {
  res.send("Hej från App.");
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
