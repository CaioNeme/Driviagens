import JoiBase from "joi";
import JoiDate from "@joi/date";

const joi = JoiBase.extend(JoiDate);

export const travelsSchema = joi.object({
  passengerId: joi.number().required(),
  flightId: joi.number().required(),
});
