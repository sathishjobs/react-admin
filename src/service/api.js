import axios from "axios";
import config from "../helper/config";
// Development
// axios.defaults.baseURL = "http://localhost:3001/azure";

// Production
axios.defaults.baseURL = "https://mitosis-azure.azurewebsites.net/azure";

class ServiceApi {
    constructor() {
    }

    async getGeoData(args) {
        try {
            const { data } = await axios.post(
                `/geoSampleData`,
                args,
                {
                    headers: { "Content-Type": "application/json" }
                }
            );
            return data;
        } catch (e) {
            throw e;
        }
    }

}

export const apiService = new ServiceApi();