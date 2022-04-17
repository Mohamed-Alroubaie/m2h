import { NextPage } from 'next';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <Head>
        <title>H2M</title>
        <meta
          name='description'
          content='Your start towards the world of expertise, excellence in the field of medical devices'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          minHeight: '100vh',
        }}
      >
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
