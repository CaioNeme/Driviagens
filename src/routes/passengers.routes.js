import { Router } from "express";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { passengersSchema } from "../schema/passengers.schemas.js";
import {
  getPassengersController,
  postPassengersController,
} from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post(
  "/passengers",
  validateSchema(passengersSchema),
  postPassengersController
);
passengersRouter.get("/passengers/travels", getPassengersController);

export default passengersRouter;
