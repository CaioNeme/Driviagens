import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";

export async function postFlightsController(req, res) {
  const status = httpStatus;
  const { origin, destination, date } = req.body;

  await flightsService.postFlightsServices(origin, destination, date);
  res.sendStatus(status.CREATED);
}

export async function getFlightsController(req, res) {
  const status = httpStatus;
  const {
    origin,
    destination,
    "smaller-date": smallerDate,
    "bigger-date": biggerDate,
  } = req.query;

  const resp = await flightsService.getFlightsService(
    origin,
    destination,
    smallerDate,
    biggerDate
  );
  res.status(status.OK).send(resp);
}
