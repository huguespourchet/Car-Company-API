const Post = require("../services/posts.service");
const Comment = require("../services/comments.service");

exports.addPost = (req, res) => {
    const data = {
        description:req.body.description,
        imagePath:req.body.imagePath,
        addedByUserId: req.body.addedByUserId
    };
    console.log(data);
    Post.create({
        description: data.description,
        imagePath: data.imagePath,
        addedByUserId: data.addedByUserId,
        datetimeCreated: new Date(),
    }).then(result => {
        return res.status(200).send({
            success:1,
            data:result
        });
    }).catch(err => {
        console.log(err);
        return res.status(400).send({success:0,data:"Bad request"});
    });
};

exports.addComment = (req,res) =>{
    const data = {
        comment:req.body.comment,
        addedByUserId: req.body.addedByUserId
    };
    let postId = req.params.id;
    Comment.create({
        comment:data.comment,
        postId:postId,
        datetimeCreated: new Date(),
        addedByUserId: data.addedByUserId
    }).then(result => {
        return res.status(200).send({
            success:1,
            data:result
        });
    }).catch(err => {
        console.log(err);
        return res.status(400).send({success:0,data:"Bad request"});
    });
};


exports.getPost = (req,res)=>{
    let id = req.query.postId;
    Post.findAll({
        where: {
            id: id
        },
        include: Comment
    }).then(result => {
        return res.status(200).send({
            success:1,
            data:result
        });
    }).catch(err => {
        console.log(err);
        return res.status(400).send({success:0,data:"Bad request"});
    });
};


exports.getPostComments = (req,res)=>{
    let id = req.params.id;
    Post.findByPk(id).then(post => post.getComments()).then(result => {
        return res.status(200).send({
            success:1,
            data:result
        });
    }).catch(err => {
        console.log(err);
        return res.status(400).send({success:0,data:"Bad request"});
    });
};