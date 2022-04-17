import { NextPage } from 'next';
import Image from 'next/image';
import Layout from '../components/Layout';

const Index: NextPage = () => {
  return (
    <Layout>
      <div
        style={{
          height: '100vh',
          width: '80vw',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <h1>We are a group that aims to communicate knowledge in best way</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          esse fugit delectus quo tempora modi, autem ipsum, dicta ducimus
          cumque quam quasi atque excepturi unde, possimus omnis dolores porro
          ipsam.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
