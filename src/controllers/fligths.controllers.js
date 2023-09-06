import httpStatus from "http-status";
import { flightsService } from "../services/flights.service.js";
import { errorsFlights } from "../errors/flights.erros.js";
import { postFlightsRepository } from "../repositories/fligths.repository.js";

export async function postFlightsController(req, res) {
  const status = httpStatus;
  const { origin, destination, date } = req.body;

  if (flightsService.sameLocal(origin, destination)) {
    return res.status(status.CONFLICT).send(errorsFlights.unprocessable_entity);
  }
  if (flightsService.dateValidation(date)) {
    return res
      .status(status.UNPROCESSABLE_ENTITY)
      .send(errorsFlights.unprocessable_entity());
  }

  try {
    await postFlightsRepository(origin, destination, date);
    res.sendStatus(status.CREATED);
  } catch (error) {
    console.log(error);
    if (error.code === "23503") {
      return res.status(status.NOT_FOUND).send(error.detail);
    }
    res.status(status.INTERNAL_SERVER_ERROR).send(error);
  }
}
