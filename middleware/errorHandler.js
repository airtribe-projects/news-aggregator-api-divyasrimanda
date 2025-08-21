export const errorHandler = (err, req, res, next) => {
  console.error(err);
  const status = err.statusCode || 500;
  const message = err.message || "Server error";

  if (err.code === 11000) {
    return res
      .status(409)
      .json({
        message:
          "Duplicate field value: " + Object.keys(err.keyValue).join(", "),
      });
  }

  res.status(status).json({ message });
};
