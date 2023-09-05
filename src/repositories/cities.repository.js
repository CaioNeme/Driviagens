import { db } from "../database/database.connection.js";

export async function postCityRepository(name) {
  const city = await db.query(`INSERT INTO cities ("name") VALUES ($1);`, [
    name,
  ]);

  return city;
}
