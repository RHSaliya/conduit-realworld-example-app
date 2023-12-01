import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function getTags() {
  try {
    const { data } = await axios({ url: `${import.meta.env.VITE_DB_TARGET ?? "api"}/tags` });

    return data.tags;
  } catch (error) {
    errorHandler(error);
  }
}

export default getTags;
