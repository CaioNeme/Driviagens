import JoiBase from "joi";
import JoiDate from "@joi/date";

const joi = JoiBase.extend(JoiDate);

export const flightsSchema = joi.object({
  origin: joi.number().required(),
  destination: joi.number().required(),
  date: joi.date().format("DD-MM-YYYY").required(),
});
