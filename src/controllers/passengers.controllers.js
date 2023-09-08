import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

export async function postPassengersController(req, res) {
  const status = httpStatus;
  const { firstName, lastName } = req.body;

  try {
    await passengersService.postPassengers(firstName, lastName);

    res.sendStatus(status.CREATED);
  } catch (error) {
    res.status(status.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getPassengersController(req, res) {
  const status = httpStatus;
  const { name } = req.query;

  try {
    const passengers = await passengersService.getPassengers(name);

    res.status(status.OK).send(passengers.rows);
  } catch (error) {
    console.log(error);
    res.sendStatus(status.INTERNAL_SERVER_ERROR);
  }
}
