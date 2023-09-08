import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";

export async function postFlightsController(req, res) {
  const status = httpStatus;
  const { origin, destination, date } = req.body;

  try {
    await flightsService.postFlightsServices(origin, destination, date);
    res.sendStatus(status.CREATED);
  } catch (error) {
    console.log(error);
    res.status(status.UNPROCESSABLE_ENTITY).send(error.message);
  }
}

export async function getFlightsController(req, res) {
  const status = httpStatus;
  const { origin, destination, smallerDate, biggerDate } = req.query;

  try {
    const resp = await flightsService.getFlightsService(
      origin,
      destination,
      smallerDate,
      biggerDate
    );
    res.status(status.OK).send(resp);
  } catch (error) {
    console.log(error.type);
    if (error.type === "badRequest") {
      return res.status(status.BAD_REQUEST).send(error.message);
    }
    if (error.type === "unprocessableEntity") {
      return res.status(status.UNPROCESSABLE_ENTITY).send(error.message);
    }
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
}
