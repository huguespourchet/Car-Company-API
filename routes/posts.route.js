const postsController = require("../controllers/posts.controller");
const express = require("express");
let router = express.Router();

router.get("/findById", postsController.getPost)
/**
 * @swagger
 * /posts/findById:
 *   get:
 *      description: Used to get a post's info and all comments for a particular post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: query
 *            name: postId
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.get("/:id/comments/",postsController.getPostComments);
/**
 * @swagger
 * /posts/{postId}/comments:
 *   get:
 *      description: Used to get all comments for a particular post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: path
 *            name: postId
 *            type: integer
 *            required: true
 *      responses:
 *          '200':
 *              description: Resource returned successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/add",postsController.addPost);
/**
 * @swagger
 * /posts/add:
 *   post:
 *      description: Used to add a new post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: body
 *            name: Post
 *            description: Post data
 *            schema:
 *              type: object
 *              required:
 *                 - description
 *                 - addedByUserId
 *              properties:
 *                  description:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: This is a post about Node JS
 *                  imagePath:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: https://www.developpez.net/forums/attachment.php?attachmentid=331436&d=1512059512
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
router.post("/:id/comments/add",postsController.addComment);
/**
 * @swagger
 * /posts/{postId}/comments/add:
 *   post:
 *      description: Used to add a new comment for a particular post
 *      tags:
 *          - posts
 *      parameters:
 *          - in: path
 *            name: postId
 *            type: integer
 *            required: true
 *            description: this is the post id
 *          - in: body
 *            name: Comment
 *            description: Comment data
 *            schema:
 *              type: object
 *              required:
 *                 - comment
 *                 - addedByUserId
 *              properties:
 *                  comment:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: This is a comment
 *                  addedByUserId:
 *                      type: integer
 *                      example: 1
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */
module.exports = router;