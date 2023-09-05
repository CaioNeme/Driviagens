import { Router } from "express";

const passagersRouter = Router();

passagersRouter.post("/passagers");
passagersRouter.get("/passagers/travels");

export default passagersRouter;
