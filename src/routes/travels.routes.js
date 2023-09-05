import { Router } from "express";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { travelsSchema } from "../schema/travels.schemas.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelsSchema));

export default travelsRouter;
