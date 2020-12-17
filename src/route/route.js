import Controller from '../controller/controller.js'
import dotenv from 'dotenv'
dotenv.config()

const routes = (app) => {
    app.route('/survey').get((request, response) => {
        var controller = new Controller();
        controller.get(request, response);
    });

    app.route('/survey/foodTypes').get((request, response) => {
        var controller = new Controller();
        controller.getFoodTypes(request, response);
    });

    app.route('/survey/participate').post(async (request, response) => {
        var controller = new Controller();
        controller.add(request, response);
    });

    app.route('/survey/users').get((request, response) => {
        var controller = new Controller();
        controller.getUsers(request, response);
    });

    app.route('/survey/ducks').get((request, response) => {
        var controller = new Controller();
        controller.getDucks(request, response);
    });
}
export default routes
