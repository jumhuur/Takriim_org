import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/Credential";
export const Handaler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.ClIENT_ID,
      clientSecret: process.env.ClIENT_SECRET,
    }),
    // CredentialsProvider({
    //   id: "Credentials",
    //   name: "Credentials",
    //   async authorize(Credentials) {},
    // }),
    // ...add more providers here
  ],
});
export { Handaler as GET, Handaler as POST };
