import httpStatus from "http-status";
import { travelServices } from "../services/travels.service.js";

export async function postTravelsController(req, res) {
  const status = httpStatus;
  const { passengerId, flightId } = req.body;
  try {
    const travel = await travelServices.postTravels(passengerId, flightId);
    res.sendStatus(status.CREATED);
  } catch (error) {
    console.log(error);
    if (error.code === "23503") {
      return res
        .status(status.NOT_FOUND)
        .send("Por favor verifique se todos os dados estão corretos!");
    }
    res.status(status.INTERNAL_SERVER_ERROR).send(error);
  }
}
