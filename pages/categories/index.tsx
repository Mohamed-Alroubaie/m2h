import { NextPage } from 'next';
import Card from '../../components/Card';
import Layout from '../../components/Layout';
import data from '../../data.json';

interface Data {
  id?: number;
  img: string;
  title: string;
  subtitle: string;
  action: string;
}

const Index: NextPage = () => {
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

export default Index;
