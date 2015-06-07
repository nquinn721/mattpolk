module.exports = function (req,res, message) {
	withparams(req);
	flash.error(req, message);
	return res.redirect('/');
}