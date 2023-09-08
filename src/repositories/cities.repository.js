import { db } from "../database/database.connection.js";

export async function postCityRepository(name) {
  await db.query(`INSERT INTO cities ("name") VALUES ($1);`, [name]);
}

export async function verifyCity(name) {
  const city = await db.query(`SELECT * FROM cities WHERE "name" = $1;`, [
    name,
  ]);
  return city.rowCount;
}
