import joi from 'joi'
import Service from '../service/service.js'

class Controller {
    service = null;

    constructor() {
        global.service = new Service();
    }

    async add(request, response) {
        try {
            request.body.timePeriod = global.service.getTimePeriod(request.body.time);
            console.log(request.body.timePeriod);
            let responseObj = global.service.add(request.body);
            response.send({'status':200,'data':request.body});
        } catch (e) {
            console.error(e);
            response.send({'error':e,'responseCode':500});
        }
    }

    async get(request, response) {
        try {
            let responseObj = await global.service.get();
            let responseObjJson = global.service.getOutputJSON(responseObj);
            response.json({'status':200,'data':responseObjJson});
        } catch (e) {
            console.error(e);
            response.send({'error':e,'responseCode':500});
        }
    }

    async getFoodTypes(request, response) {
        try {
            let responseObj = await global.service.getFoodTypes();
            response.json({'status':200,'data':responseObj});
        } catch (e) {
            console.error(e);
            response.send({'error':e,'status':500});
        }
    }

    async getUsers(request, response) {
      // send query as ?by=country
        try {
            var requestParam = request.query.by
            let responseObj = await global.service.getUsers(requestParam);
            var responseObjJson = [];

            for(var i=0; i<responseObj.length; i++) {
                var name = "";

                switch(requestParam) {
                  //case "timePeriod":
                    //name =responseObj[i].timePeriod
                  //case "country":
                    //name = responseObj[i].Region.Country.name;
                  }

                responseObjJson[i] = {
                  name: name,
                  userCount: responseObj[i].count
                }
            }

            response.json(responseObj);
        } catch (e) {
            console.error(e);
            response.send({'error':e,'responseCode':500});
        }
    }

    async getDucks(request, response) {
      // send query as ?by=country
        try {
            var requestParam = request.query.by
            let responseObj = await global.service.getDucks(requestParam);
            var responseObjJson = [];

            for(var i=0; i<responseObj.length; i++) {
                var name = "";

                switch(requestParam) {
                  //case "timePeriod":
                    //name =responseObj[i].timePeriod
                  //case "country":
                    //name = responseObj[i].Region.Country.name;
                  }

                responseObjJson[i] = {
                  name: name,
                  duckCount: responseObj[i].count
                }
            }

            response.json(responseObj);
        } catch (e) {
            console.error(e);
            response.send({'error':e,'responseCode':500});
        }
    }
}
export default Controller
