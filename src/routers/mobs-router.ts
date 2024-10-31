import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export const mobsRouter = express.Router(); // Kör vid input time

const mobs = [
  {
    name: "Kåda",
    id: "1",
    members: [
      {
        name: "Anton",
        id: "1",
      },
    ],
  },
  {
    name: "Spicy",
    id: "2",
    members: [
      {
        name: "Daniel",
        id: "1",
      },
    ],
  },
  {
    name: "Infinågot",
    id: "3",
    members: [
      {
        name: "Love",
        id: "1",
      },
    ],
  },
];

mobsRouter.get("/", (req: Request, res: Response) => {
  console.log(req.method);
  res.status(200).json(mobs);
});

mobsRouter.post("/", (req: Request, res: Response) => {
  const { name } = req.body;
  const id = uuidv4();
  mobs.push({ name, id, members: [] });

  res.status(201).location(`/api/v1/mobs/${id}`).json(id);
});

mobsRouter.get("/:mobsId", (req: Request, res: Response) => {
  const mobId = req.params.mobsId;

  const mob = mobs.find((mob) => mob.id === mobId);

  res.status(200).json(mob);
});

mobsRouter.get("/:mobId/members", (req: Request, res: Response) => {
  const { mobId }= req.params;

  const mob = mobs.find((mob) => mob.id === mobId);

  res.status(200).json(mob?.members);
});

mobsRouter.post(
  "/:mobId/members",
  (req: Request, res: Response) => {
    const { name } = req.body;
    const { mobId } = req.params;

    const membersId = uuidv4();

    const mob = mobs.find((mob) => mob.id === mobId);

    mob?.members.push({ name, id: membersId });
    console.log(mob?.members)

    res.status(201).json(membersId);
  },
);

mobsRouter.get(
  "/:mobId/members/:memberId",
  (req: Request, res: Response) => {
    const { mobId, memberId } = req.params;

    const mob = mobs.find((mob) => mob.id === mobId);

    const member = mob?.members.find((member) => member.id === memberId);

    res.status(200).json(member);
  },
);
