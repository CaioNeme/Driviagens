export default function validateSchema(schema) {
  return (req, res, next) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      throw { type: "unprocessableEntity", message: "Dados inválidos" };
    }
    next();
  };
}
