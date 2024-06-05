import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import prisma from "./app/lib/db";

async function getUser(email: string): Promise<{
  email: string;
  password: string;
} | null> {
  try {
    const user = await prisma.users.findUnique({
      where: { email: email },
      select: {
        email: true,
        password: true,
      },
    });

    return user;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          // const passwordsMatch = await bcrypt.compare(password, user.password);
          const passwordsMatch = password == user.password;
          if (passwordsMatch) return user;
        }
        // eslint-disable-next-line no-console
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
