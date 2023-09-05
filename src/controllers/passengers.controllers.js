import httpStatus from "http-status";
import { passengersService } from "../services/passengers.service.js";

export async function postPassengersController(req, res) {
  const status = httpStatus;
  const { firstName, lastName } = req.body;

  try {
    await passengersService.postPassengers(firstName, lastName);

    res.sendStatus(status.CREATED);
  } catch (error) {
    console.log(error);
    res.status(status.BAD_REQUEST).send(error);
  }
}
