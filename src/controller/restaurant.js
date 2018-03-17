import {Router} from 'express';
import Restaurant from '../model/restaurant';

export default(config) => {
  let api = Router();

  // '/v1/restaurant/add' - Create
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;

    newRest.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Restaurant saved successfully'});
    });
  });

  // '/v1/restaurant/add' - Read
  api.get('/', (req, res) => {
    Restaurant.find(restModel, (err, restaurants) => {
      if (err) {
        res.send(err);
      }
      res.json(restaurants);
    });
  });

  return api;
}
