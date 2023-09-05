import { postPassengersRepository } from "../repositories/passengers.repository.js";

function postPassengers(firstName, lastName) {
  return postPassengersRepository(firstName, lastName);
}

export const passengersService = { postPassengers };
