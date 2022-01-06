/*
 * Sets up URL for API GET request
 */

import axios from "axios";
import key from "./config";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer " + key,
  },
});
