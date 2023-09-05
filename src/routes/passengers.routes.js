import { Router } from "express";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { passengersSchema } from "../schema/passengers.schemas.js";

const passagersRouter = Router();

passagersRouter.post("/passagers", validateSchema(passengersSchema));
passagersRouter.get("/passagers/travels");

export default passagersRouter;
