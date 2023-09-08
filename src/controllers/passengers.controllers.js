import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

export async function postPassengersController(req, res) {
  const status = httpStatus;
  const { firstName, lastName } = req.body;

  await passengersService.postPassengers(firstName, lastName);

  res.sendStatus(status.CREATED);
}

export async function getPassengersController(req, res) {
  const status = httpStatus;
  const { name } = req.query;

  const passengers = await passengersService.getPassengers(name);

  res.status(status.OK).send(passengers.rows);
}
