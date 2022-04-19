import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Card.module.scss';

interface Data {
  id?: number;
  img: string;
  title: string;
  subtitle: string;
  action: string;
}

const Card: NextPage<Data> = ({ img, title, subtitle, action }) => {
  return (
    <div className={s.cards}>
      <div className={s.card}>
        <Image
          src={img}
          width={400}
          height={200}
          layout='responsive'
          alt='Card Image'
          // className={s.img}
        />
        <div className={s.content}>
          <h1 className={s.title}>{title}</h1>
          <p className={s.subtitle}>{subtitle}</p>
          <p className={s.action}>
            <Link href='/'>
              <a>{action}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
