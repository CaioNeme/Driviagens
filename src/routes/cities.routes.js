import { Router } from "express";
import { citiesSchema } from "../schema/cities.schemas.js";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citiesSchema));

export default citiesRouter;
