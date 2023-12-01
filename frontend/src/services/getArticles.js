import axios from "axios";
import errorHandler from "../helpers/errorHandler";

// prettier-ignore
async function getArticles({ headers, limit = 3, location, page = 0, tagName, username }) {
  try {
    const url = {
      favorites: `${import.meta.env.VITE_DB_TARGET ?? ""}/api/articles?favorited=${username}&&limit=${limit}&&offset=${page}`,
      feed: `${import.meta.env.VITE_DB_TARGET ?? ""}/api/articles/feed?limit=${limit}&&offset=${page}`,
      global: `${import.meta.env.VITE_DB_TARGET ?? ""}/api/articles?limit=${limit}&&offset=${page}`,
      profile: `${import.meta.env.VITE_DB_TARGET ?? ""}/api/articles?author=${username}&&limit=${limit}&&offset=${page}`,
      tag: `${import.meta.env.VITE_DB_TARGET ?? ""}/api/articles?tag=${tagName}&&limit=${limit}&&offset=${page}`,
    };

    const { data } = await axios({ url: url[location], headers });

    return data;
  } catch (error) {
    errorHandler(error);
  }
}

export default getArticles;
