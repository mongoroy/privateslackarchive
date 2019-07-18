import { app } from "./app";
import { items, messagesCollection } from "./mongodb";
import {
  loginAnonymous,
  logoutCurrentUser,
  hasLoggedInUser,
  getCurrentUser,
} from "./authentication";

export { app, items, messagesCollection };
export { loginAnonymous, logoutCurrentUser, hasLoggedInUser, getCurrentUser };
