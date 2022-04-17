import { GetStaticProps, NextPage } from 'next';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

interface Data {
  id?: number;
  img: string;
  title: string;
  subtitle: string;
  action: string;
}

const Index: NextPage = ({ data }: any) => {
  return (
    <Layout>
      <>
        {data.map(({ id, img, title, subtitle, action }: Data) => (
          <Card
            key={id}
            title={title}
            img={img}
            action={action}
            subtitle={subtitle}
          />
        ))}
      </>
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

export default Index;
