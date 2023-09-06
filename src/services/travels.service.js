import { postTravelsRepository } from "../repositories/travels.repository.js";

function postTravels(passengerId, flightId) {
  return postTravelsRepository(passengerId, flightId);
}

export const travelServices = { postTravels };
