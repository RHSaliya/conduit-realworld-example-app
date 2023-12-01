import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function getArticle({ headers, slug }) {
  try {
    const { data } = await axios({ headers, url: `${import.meta.env.VITE_DB_TARGET ?? ""}/api/articles/${slug}` });

    return data.article;
  } catch (error) {
    errorHandler(error);
  }
}

export default getArticle;
