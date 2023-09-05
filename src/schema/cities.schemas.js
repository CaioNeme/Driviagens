import JoiBase from "joi";
import JoiDate from "@joi/date";

const joi = JoiBase.extend(JoiDate);

export const citiesSchema = joi.object({
  name: joi.string().required().min(2).max(50),
});
