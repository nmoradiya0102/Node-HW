const express = require("express");
const { blogValidation } = require("../validation");
const { blogController } = require("../controller");
const validate = require("../middlewares/validate");

const router = express.Router();

/** create blog */
router.post(
  "/create-blog",
  validate(blogValidation.create_Blog),
  blogController.createBlog
);

/** blog list */
router.get(
  "/list",
  blogController.get_Blog_List
)

router.delete(
  "/delete/:blogId",
  blogController.delete_Blog
)

router.put(
  "/update-blog/:blogId",
  blogController.update_Blog
)

module.exports = router;