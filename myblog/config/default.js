module.exports = {
	port:3000,//监听端口
	//express-session的配置信息
	session:{
		secret:'myblog',
		key:'myblog',
		maxAge:2592000000
	},
	//mongdb的地址，mylog为db名称
	mongodb:'mongodb://localhost:27017/myblog'
};