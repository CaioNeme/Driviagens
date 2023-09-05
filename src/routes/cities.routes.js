import { Router } from "express";
import { citiesSchema } from "../schema/cities.schemas.js";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { postCityControllers } from "../controllers/cities.controllers.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citiesSchema), postCityControllers);

export default citiesRouter;
