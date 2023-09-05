import { Router } from "express";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { flightsSchema } from "../schema/flights.schemas.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightsSchema));
flightsRouter.get("/flights");

export default flightsRouter;
