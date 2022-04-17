import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import Layout from '../components/Layout';
import Main from '../components/Main';
import Card from '../components/Card';
interface Data {
  id?: number;
  img: string;
  title: string;
  subtitle: string;
  action: string;
}

const Home: NextPage<Data> = ({ data }: any) => {
  return (
    <Layout>
      <Image src={'/images/Group 75.png'} layout='fill' alt='' />
      <Main />
      {data.map(({ id, img, title, subtitle, action }: Data) => (
        <Card
          key={id}
          title={title}
          img={img}
          action={action}
          subtitle={subtitle}
        />
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/data');
  const data: Data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Home;
