import axios from "axios";
import errorHandler from "../helpers/errorHandler";

async function userSignUp({ username, email, password }) {
  try {
    const { data } = await axios({
      data: { user: { username, email, password } },
      method: "POST",
      url: `${import.meta.env.VITE_DB_TARGET ?? "api"}/users`,
    });

    const { user } = data;
    const headers = { Authorization: `Token ${user.token}` };

    const loggedIn = { headers, isAuth: true, loggedUser: user };

    localStorage.setItem("loggedUser", JSON.stringify(loggedIn));

    return loggedIn;
  } catch (error) {
    errorHandler(error);
  }
}

export default userSignUp;
