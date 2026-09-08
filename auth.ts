import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (typeof email !== "string" || typeof password !== "string") {
          return null;
        }

        if (email !== process.env.ADMIN_EMAIL) {
          return null;
        }

        const passwordMatches = await bcrypt.compare(
          password,
          process.env.ADMIN_PASSWORD_HASH!
        );

        if (!passwordMatches) {
          return null;
        }

        return { id: "admin", email };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
});
