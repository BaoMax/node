var express = require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

router.get('/',function(req,res,next){
	res.send(req.flash());
});
//GET /posts/create发表文章页面
router.get('/create',checkLogin,function(req,res,next){
	res.send(req.flash());
});
//POST /posts 发表文章
router.post('/',checkLogin,function(req,res,next){
	res.send(req.flash());
});
//GET /posts/:postId 查看某篇文章
router.get('/:postId',checkLogin,function(req,res,next){
	res.send(req.flash());
})
//GET /posts/:postId/edit 修改文章页面
router.get('/:postId/edit',checkLogin,function(req,res,next){
	res.send(req.flash());
});
//POST /posts/:postId/edit 修改文章
router.post('/:postId/edit',checkLogin,function(req,res,next){
	res.send(req.flash());
});
//GET /posts/:postId/remove 删除文章
router.post('/:postId/remove',checkLogin,function(req,res,next){
	res.send(req.flash());
});
//POST /posts/:postId/comment 创建留言
router.post('/:postId/comment',checkLogin,function(req,res,next){
	res.send(req.flash());
});
//GET /posts/:postId/comment/:commentId/remove 删除留言
router.post('/:postId/comment/:commentId/remove',checkLogin,function(req,res,next){
	res.send(req.flash());
});
module.exports = router;