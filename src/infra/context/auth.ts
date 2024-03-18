import { create } from "zustand";
import { CookiesHandler } from "@/infra/cookies";

interface UserState {
  loading: boolean;
  logged: boolean;
  id: string | null;
  username: string | null;
  email: string | null;
  provider: string | null;
  confirmed: boolean | null;
  blocked: boolean | null;
  createdAt: string | null;
  updatedAt: string | null;
  keepAuth: boolean;
}

interface AuthState {
  user: UserState;
  userHandle: (obj: UserState) => void;
  userUpdate: (obj: Partial<UserState>) => void;
  userRecovery: () => Promise<boolean>;
  userLogout: () => boolean;
}

export const useAuth = create<AuthState>(set => ({
  user: {
    loading: true,
    logged: false,
    id: null,
    username: null,
    email: null,
    provider: null,
    confirmed: null,
    blocked: null,
    createdAt: null,
    updatedAt: null,
    keepAuth: false,
  },
  userHandle: obj => {
    CookiesHandler.session.set(obj);
    return set({ user: obj });
  },
  userUpdate: obj => set(state => ({ user: { ...state.user, ...obj } })),
  userRecovery: async () => {
    const session = await CookiesHandler.session.get();
    if (!!session) {
      set({ user: session });
      return true;
    }
    return false;
  },
  userLogout: () => {
    CookiesHandler.session.remove();
    return true;
  },
}));
