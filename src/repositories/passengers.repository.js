import { db } from "../database/database.connection.js";

export async function postPassengersRepository(firstName, lastName) {
  const passengers = await db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
  return passengers;
}
