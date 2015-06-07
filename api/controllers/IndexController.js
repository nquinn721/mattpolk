
module.exports = {
	login : function (req, res) {
		res.view('login');
	},
	index : function (req, res) {
		res.locals.indexroute = 'active';
		res.view('index');
	}
};
