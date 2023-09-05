import { Router } from "express";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { passengersSchema } from "../schema/passengers.schemas.js";
import { postPassengersController } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post(
  "/passengers",
  validateSchema(passengersSchema),
  postPassengersController
);
passengersRouter.get("/passengers/travels");

export default passengersRouter;
