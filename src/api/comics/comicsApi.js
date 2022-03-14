import axios from "axios";
import { storageGet, storagePost } from "../../helpers/persistenceLocalstorage";

export default {
  fetchComic: ({ number }) => axios({
    url: `${process.env.VUE_APP_URL_API_COMICS}/${number}/info.0.json?number=${number}`,
    method: 'GET'
  }),
  fetchPoints: (path) => storageGet(path),
  addPoints: ({ path, data }) => storagePost({
    data,
    path
  }),
};
