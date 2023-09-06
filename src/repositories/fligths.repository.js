import { db } from "../database/database.connection.js";

export async function postFlightsRepository(origin, destination, date) {
  const flight = await db.query(
    `INSERT INTO flights ("origin", "destination", "date") VALUES ($1, $2, $3);`,
    [origin, destination, date]
  );

  return flight;
}
