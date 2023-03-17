function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    next("Server side error");
  } else {
    if (err.message) {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    } else {
      res.status(500).json({
        error: {
          message: "Server side error",
        },
      });
    }
  }
}

module.exports = errorHandler;
