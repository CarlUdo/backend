import express from "express";
import { mobsRouter } from "./routers/mobs-router";
import { notFoundHandler } from "./middleware/not-found-handler";

export const app = express();

app.use(express.json());

app.use("/api/v1/mobs", mobsRouter);

app.use(notFoundHandler);
