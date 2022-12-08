import axios from "axios";
import Config from "../config";

export default {
  async baseApi(sub_url, method, json_data, cb) {
    let user = localStorage.currentUser
      ? JSON.parse(localStorage.currentUser)
      : null;
    try {
      let request = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      if (user && user.jwt) {
        request.headers.Authorization = "Bearer " + user["jwt"];
      }
      if (method == "POST" || method == "PUT") {
        request["body"] = JSON.stringify(json_data);
      }
      let response = await fetch(Config.SERVICE_API_URL + sub_url, request);
      let responseJson = await response.json();
      if (response.status == 200) {
        cb(null, responseJson);
      } else {
        cb(responseJson);
      }
    } catch (error) {
      cb(error);
    }
  },

  async baseApiWithoutAuth(sub_url, method, json_data, cb) {
    // let user = localStorage.currentUser ? JSON.parse(localStorage.currentUser) : null
    let user = localStorage.currentUser;
    try {
      let request = {
        method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      if (method == "POST" || method == "PUT") {
        request["body"] = JSON.stringify(json_data);
      }
      let response = await fetch(Config.SERVICE_API_URL + sub_url, request);
      let responseJson = await response.json();
      if (response.status == 200) {
        cb(null, responseJson);
      } else {
        cb(responseJson);
      }
    } catch (error) {
      cb(error);
    }
  },

  async fileUpload(uri, cb) {
    try {
      const formData = new FormData();
      formData.append("files", uri);
      let response = await fetch(Config.SERVICE_API_URL + "/upload", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        mode: "cors",
        body: formData,
        timeout: 30000,
      });
      let status = response.status;
      let responseJson = await response.json();
      if (status == 200 || status == 201) {
        cb(null, responseJson);
      } else {
        cb(responseJson.message);
      }
    } catch (error) {
      cb(error);
    }
  },

  login(identifier, password, cb) {
    this.baseApi(
      "/auth/local",
      "POST",
      { identifier, password },
      (err, res) => {
        if (err == null) {
          localStorage.currentUser = JSON.stringify(res?.user);
        }
        cb(err, res);
      }
    );
  },

  signup(data, cb) {
    this.baseApi("/auth/local/register", "POST", data, (err, res) => {
      cb(err, res);
    });
  },

  contactUs(data, cb) {
    this.baseApiWithoutAuth("/landing/contact_us", "POST", data, cb);
  },
};
