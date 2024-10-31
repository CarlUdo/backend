import express from "express";
import { mobsRouter } from "./routers/mobs-router";

export const app = express();

app.use(express.json());

app.use("/api/v1/mobs", mobsRouter);

// app.get("/api/v1/mobs/:mobId", (req: Request, resp: Response) => {
//   resp.status(200).json([]);
// });

// app.get("/api/v1/mobs/:mobId/members", (req: Request, resp: Response) => {
//   resp.status(200).json([]);
// });

// app.post("/api/v1/mobs/:mobId/members", (req: Request, resp: Response) => {
//   resp.status(200).json([]);
// });

// app.post("/api/v1/mobs/:mobId/members/:memberId", (req: Request, resp: Response) => {
//   resp.status(200).json([]);
// });
