import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function setArticle({ body, description, headers, slug, tagList, title }) {
  try {
    const { data } = await axios({
      data: { article: { title, description, body, tagList } },
      headers,
      method: slug ? "PUT" : "POST",
      url: slug ? `${import.meta.env.VITE_DB_TARGET ?? "api"}/articles/${slug}` : `${import.meta.env.VITE_DB_TARGET ?? "api"}/articles`,
    });

    return data.article.slug;
  } catch (error) {
    errorHandler(error);
  }
}

export default setArticle;
