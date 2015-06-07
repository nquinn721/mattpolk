/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getall : function (req, res) {
		Item.find().paginate({limit : 10}).then(function (items) {
			res.view('reports', {
				reportsroute : 'active',
				items : items
			});
		});
	},
	additem : function (req, res) {

		if(!req.param('title'))
			return validate(req, res, 'Must have a title');
		if(!req.param('description'))
			return validate(req, res, 'Must have a description');
		if(!req.param('price'))
			return validate(req, res, 'Must have a price');
		if(typeof Number(req.param('cost')) !== 'number')
			return validate(req, res, 'Cost must be a number');

		Item.create(req.allParams()).then(function (item) {
			if(item)
				flash.success(req, 'You have added an item');
			else flash.error(req, 'Item failed to add');
			res.redirect('/');
		});
	},
};

