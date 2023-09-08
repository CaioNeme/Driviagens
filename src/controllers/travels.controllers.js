import httpStatus from "http-status";
import { travelServices } from "../services/travels.service.js";

export async function postTravelsController(req, res) {
  const status = httpStatus;
  const { passengerId, flightId } = req.body;

  await travelServices.postTravels(passengerId, flightId);
  res.sendStatus(status.CREATED);
}
