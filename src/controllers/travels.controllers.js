import httpStatus from "http-status";
import { travelServices } from "../services/travels.service.js";

export async function postTravelsController(req, res) {
  const status = httpStatus;
  const { passengerId, flightId } = req.body;
  try {
    await travelServices.postTravels(passengerId, flightId);
    res.sendStatus(status.CREATED);
  } catch (error) {
    // console.log(error);
    res.status(status.NOT_FOUND).send(error.message);
  }
}
