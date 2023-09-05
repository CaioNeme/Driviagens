import { Router } from "express";
import travelsRouter from "./travels.routes.js";
import passagersRouter from "./passengers.routes.js";
import flightsRouter from "./flights.routes.js";
import citiesRouter from "./cities.routes.js";

const router = Router();

router.use(travelsRouter);
router.use(passagersRouter);
router.use(flightsRouter);
router.use(citiesRouter);

export default router;
