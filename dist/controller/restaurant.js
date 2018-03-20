'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _restaurant = require('../model/restaurant');

var _restaurant2 = _interopRequireDefault(_restaurant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (config) {
  var api = (0, _express.Router)();

  // '/v1/restaurant/add' - Create
  api.post('/add', function (req, res) {
    var newRest = new _restaurant2.default();
    newRest.name = req.body.name;

    newRest.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Restaurant saved successfully' });
    });
  });

  // '/v1/restaurant/add' - Read
  api.get('/', function (req, res) {
    _restaurant2.default.find(restModel, function (err, restaurants) {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  return api;
};
//# sourceMappingURL=restaurant.js.map