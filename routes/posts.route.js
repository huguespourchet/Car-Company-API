const postsController = require("../controllers/posts.controller");
const express = require("express");
let router = express.Router();

router.get("/findById", postsController.getPost)
router.get("/:id/comments/",postsController.getPostComments);
router.post("/add",postsController.addPost);
router.post("/:id/comments/add",postsController.addComment);
module.exports = router;