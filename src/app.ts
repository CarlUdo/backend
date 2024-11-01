import express from "express";
import { mobsRouter } from "./routers/mobs-router";
import { notFoundHandler } from "./middleware/not-found-handler";
import cors from "cors";

export const app = express();

app.use(cors({origin: "https://carludo.github.io/frontend/"}));

app.use(express.json());

app.use("/api/v1/mobs", mobsRouter);

app.use(notFoundHandler);
