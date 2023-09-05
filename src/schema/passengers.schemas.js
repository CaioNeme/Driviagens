import JoiBase from "joi";
import JoiDate from "@joi/date";

const joi = JoiBase.extend(JoiDate);

export const passengersSchema = joi.object({
  firstName: joi.string().required().min(2).max(100),
  lastName: joi.string().required().min(2).max(100),
});
