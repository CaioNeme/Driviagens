import { Router } from "express";
import travelsRouter from "./travels.routes.js";
import passengersRouter from "./passengers.routes.js";
import flightsRouter from "./flights.routes.js";
import citiesRouter from "./cities.routes.js";

const router = Router();

router.use(travelsRouter);
router.use(passengersRouter);
router.use(flightsRouter);
router.use(citiesRouter);

export default router;
