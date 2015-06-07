module.exports = function (req) {
	req.session.withparams = req.allParams();
}