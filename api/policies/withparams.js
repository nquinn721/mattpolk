module.exports = function (req, res, next) {
	
	res.locals.withparams = {};

	if(!req.session.withparams)return next();


	
	var p = _.clone(req.session.withparams);

	for(var i in p)
		res.locals[i] = p[i];


	req.session.withparams = {};

	
	next();
}