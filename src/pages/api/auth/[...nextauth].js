import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Email({
      server: {
        host: process.env.SENDGRID_SMTP_SERVER_HOST,
        port: process.env.SENDGRID_SMTP_SERVER_PORT,
        auth: {
          user: process.env.SENDGRID_SMTP_SERVER_USER,
          pass: process.env.SENDGRID_SMTP_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  // pages: {
  //   signIn: '/signin',
  // },

  // A database is optional, but required to persist accounts in a database
  database: process.env.MONGODB_URI,
});
