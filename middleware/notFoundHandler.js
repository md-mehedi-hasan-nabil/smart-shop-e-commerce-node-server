function notFoundHandler(req, res, next) {
  res.status(404).json({
    message: "Requested url not found.",
  });
}

module.exports = notFoundHandler;
