import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const mobsRouter = express.Router(); // Kör vid input time

const mobs = [
  {
    name: "Kåda",
    id: "1",
  },
  { name: "Spicy", id: "2" },
  { name: "Infinågot", id: "3" },
];

mobsRouter.get("/", (req: Request, res: Response) => {
  console.log(req.method);
  res.status(200).json(mobs);
});

mobsRouter.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  const id = uuidv4();
  mobs.push({ name, id });

  res.status(200).location(`/api/v1/mobs/${id}`).json(id);
});
