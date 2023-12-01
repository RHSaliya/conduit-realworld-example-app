import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function toggleFollow({ following, headers, username }) {
  try {
    const { data } = await axios({
      headers,
      method: following ? "DELETE" : "POST",
      url: `${import.meta.env.VITE_DB_TARGET ?? ""}/api/profiles/${username}/follow`,
    });

    return data.profile;
  } catch (error) {
    errorHandler(error);
  }
}

export default toggleFollow;
