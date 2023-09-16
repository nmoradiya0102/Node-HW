const express = require("express");
const { movieValidation } = require("../validations");
const { movieController } = require("../controllers");
const validate = require("../middlewares/validate");
const auth = require("../middlewares/auth");

const router = express.Router();

/** create movie */
router.post(
  "/create-movie",
  auth(),
  validate(movieValidation.createMovie),
  movieController.createMovie
);

/** Get movie list */
router.get(
  "/list",
  auth(),
  validate(movieValidation.getMovieList),
  movieController.getMovieList
);

/** update movie */
router.put(
  "/update-movie/:movieId",
  auth(),
  validate(movieValidation.getDetails),
  movieController.updateMovie
);

/** Delete movie */
router.delete(
  "/delete-movie/:movieId",
  auth(),
  validate(movieValidation.getDetails),
  movieController.deleteMovie
);

module.exports = router;