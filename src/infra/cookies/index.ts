import { ILogin } from "@/interfaces/ILogin";
import { IUser } from "@/interfaces/IUser";
import Cookies from "js-cookie";

const applicationName = "MODEL";

const COOKIES_TYPES = {
  SESSION: applicationName + "$S",
  LOGIN: applicationName + "$L",
};

interface ICookiesHandler {
  session: {
    set: (obj: IUser) => Promise<void>;
    get: () => Promise<IUser | false>;
    remove: () => Promise<void>;
  };
  login: {
    set: (obj: ILogin) => Promise<void>;
    get: () => Promise<ILogin | false>;
    remove: () => Promise<void>;
  };
}

export const CookiesHandler: ICookiesHandler = {
  session: {
    set: async obj => {
      await Cookies.set(COOKIES_TYPES.SESSION, JSON.stringify(obj), {
        expires: 10,
      });
    },
    get: async () => {
      const session = Cookies.get(COOKIES_TYPES.SESSION);
      if (!!session) {
        return JSON.parse(session);
      }
      return false;
    },
    remove: async () => {
      await Cookies.remove(COOKIES_TYPES.SESSION);
    },
  },
  login: {
    set: async obj => {
      await Cookies.set(COOKIES_TYPES.LOGIN, JSON.stringify(obj), {
        expires: 10,
      });
    },
    get: async () => {
      const session = Cookies.get(COOKIES_TYPES.LOGIN);
      if (!!session) {
        return JSON.parse(session);
      }
      return false;
    },
    remove: async () => {
      await Cookies.remove(COOKIES_TYPES.LOGIN);
    },
  },
};
