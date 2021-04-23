import Head from 'next/head';
import { providers, signIn, getSession, csrfToken } from 'next-auth';

export default function SignIn({ providers, csrfToken }) {
  return (
    <div>
      <Head>
        <title>ShareParking - Sign in</title>
      </Head>
      <div className='container'>
        <h1>Sign in page</h1>
        <p>Signing up or login to start using the application.</p>
        <form method='post' action='/api/auth/signin/email'>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <label>
            Email
            <input type='text' id='email' name='email' />
          </label>
          <button type='submit'>Use your email</button>
        </form>
        {Object.values(providers).map((provider) => {
          if (provider.name === 'Email') {
            return;
          }
          return (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id)}>
                With {provider.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

SignIn.getInitialProps = async (context) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session && res && session.accessToken) {
    res.writeHead(302, {
      Location: '/',
    });
    res.end();
    return;
  }
  return {
    session: undefined,
    providers: await providers(context),
    // Only for email sign in
    csrfToken: await csrfToken(context),
  };
};
