module.exports = function(app){
	app.use("/",function(req,res,next){
		res.redirect('/posts');
	});
	app.use("/sigin",require('./signin'));//登录
	app.use("/sigup",require('./signup'));//注册
	app.use("/sigout",require('./signout'));//登出
	app.use("/posts",require('./posts'));//主页
}