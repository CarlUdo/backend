import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const mobsRouter = express.Router(); // Kör vid input time

const mobs = [
  {
    name: "Kåda",
    id: "1",
    members: [
      "Anton",
      "Leo",
      "Carl"
    ]
  },
  { name: "Spicy", id: "2",
    members: [
      "Daniel",
      "Caroline",
      "Victor",
      "Odin"
    ]
   },
  { name: "Infinågot", id: "3",
    members: [
      "Love",
      "Adrienn",
      "Mårten",
      "Ali"
    ]
   },
];

mobsRouter.get("/", (req: Request, res: Response) => {
  console.log(req.method);
  res.status(200).json(mobs);
});

mobsRouter.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  const id = uuidv4();
  mobs.push({ name, id, members: []});

  res.status(200).location(`/api/v1/mobs/${id}`).json(id);
});

mobsRouter.get("/:mobsId", (req: Request, res: Response) => {
  const mobId = req.params.mobsId;

  const mob = mobs.find(mob => mob.id === mobId);

  res.status(200).json(mob);
});

mobsRouter.get("/api/v1/mobs/:mobId/members", (req: Request, resp: Response) => {
  const mobId = req.params.mobsId;

  const mob = mobs.find(mob => mob.id === mobId);

  resp.status(200).json(mob?.members);
});

// app.post("/api/v1/mobs/:mobId/members", (req: Request, resp: Response) => {
//   resp.status(200).json([]);
// });

