import RestaurantController from '../controllers/RestaurantController.js'
import { Restaurant } from '../models/models.js'

const loadFileRoutes = function (app) {
  // TODO: Include routes for restaurant described in the lab session README
  app.route("/restaurants").get(RestaurantController.index).post(RestaurantController.create)
  app.route('/restaurants/:restaurantId').get(RestaurantController.show)
  app.route("/restaurants/:restaurantId").put(RestaurantController.update)
  app.route("/restaurants/:restaurantId").delete(RestaurantController.destroy)

}
export default loadFileRoutes
