import type { NextAuthConfig } from "next-auth";
import google from "next-auth/providers/google";

export default {
  providers: [google],
  trustHost: true,
  callbacks: {
    // this function runs on each and every request according to the matcher in middleware file
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    authorized: async ({ auth, request: { nextUrl } }) => {
      const isLoggedIn = !!auth?.user;
      const isOnADMIN = nextUrl.pathname.startsWith("/admin");
      if (isOnADMIN) {
        if (isLoggedIn) {
          return true;
        }
        return false;
      }
      return true;
    },
  },
} satisfies NextAuthConfig;
