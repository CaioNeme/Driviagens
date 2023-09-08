import { postTravelsRepository } from "../repositories/travels.repository.js";

async function postTravels(passengerId, flightId) {
  const resp = await postTravelsRepository(passengerId, flightId);

  if (!resp.rowCount || resp.rowCount !== 1) {
    throw { type: "notFound", message: "O passageiro ou voo não existem!" };
  }

  return resp;
}

export const travelServices = { postTravels };
