import dayjs from "dayjs";

function sameLocal(city1, city2) {
  if (city1 === city2) return true;
  return false;
}

function dateValidation(date) {
  if (!date) return true;
  return dayjs().isAfter(dayjs(date).format("DD-MM-YYYY"));
}

export const flightsService = {
  sameLocal,
  dateValidation,
};
