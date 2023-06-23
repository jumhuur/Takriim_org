import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
export const Handaler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.ClIENT_ID,
      clientSecret: process.env.ClIENT_SECRET,
    }),
    // ...add more providers here
  ],
});
export { Handaler as GET, Handaler as POST };
