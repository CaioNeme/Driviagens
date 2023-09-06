import { Router } from "express";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { flightsSchema } from "../schema/flights.schemas.js";
import { postFlightsController } from "../controllers/fligths.controllers.js";

const flightsRouter = Router();

flightsRouter.post(
  "/flights",
  validateSchema(flightsSchema),
  postFlightsController
);
flightsRouter.get("/flights");

export default flightsRouter;
