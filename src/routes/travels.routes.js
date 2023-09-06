import { Router } from "express";
import validateSchema from "../middlewares/validationSchemas.middleswares.js";
import { travelsSchema } from "../schema/travels.schemas.js";
import { postTravelsController } from "../controllers/travels.controllers.js";

const travelsRouter = Router();

travelsRouter.post(
  "/travels",
  validateSchema(travelsSchema),
  postTravelsController
);

export default travelsRouter;
