import httpStatus from "http-status";

export default function errorHandler(error, req, res, next) {
  console.log(error);

  if (error.type === "conflict") {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }

  if (error.type === "notFound") {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.type === "badRequest") {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }

  if (error.type === "unprocessableEntity") {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.type === "internalServerError") {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
  if (error.type === "tooManyRequests") {
    return res.status(httpStatus.TOO_MANY_REQUESTS).send(error.message);
  }
  if (error.type === "unauthorized") {
    return res.status(httpStatus.UNAUTHORIZED).send(error.message);
  }
  if (!error.type && error.code === "23503") {
    return res
      .status(httpStatus.NOT_FOUND)
      .send("A cidade de origem ou de destino não existe!");
  }

  res
    .status(httpStatus.INTERNAL_SERVER_ERROR)
    .send("Sorry, something went wrong 😢");
}
