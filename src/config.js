const DEV_MODE = 1;
const PRODUCT_MODE = 2;
const CURRENT_MODE = DEV_MODE; //process.env.APP_ENV
console.log("process.env.APP_ENV", process.env);
class Config {
  constructor() {
    this.config = {};
    this.configReady = false;

    if (CURRENT_MODE == DEV_MODE) {
      this.SERVICE_API_URL = "http://localhost:1338";
    } else if (CURRENT_MODE == PRODUCT_MODE) {
      this.SERVICE_API_URL = "https://market-api.reblium.com";
    }
  }
}

export default new Config();
