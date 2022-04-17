import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import style from '../styles/Main.module.scss';
const Main: NextPage = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.container}>
          <div className={style.logo}>
            <Image
              width={80}
              height={80}
              src='/images/M2H logo main 1.svg'
              alt=''
            />
          </div>
          <h1>Welcome to your complete Encyclopedia of medical devices.</h1>
          <p>
            Your start towards the world of expertise, excellence in the field
            of medical devices
          </p>
        </div>
        <div className={style.icons}>
          <Link href='/'>
            <a
              style={{
                fill: '#000000',
              }}
            >
              <Image
                height={22}
                width={22}
                src='/images/bi_instagramb.svg'
                alt=''
              />
            </a>
          </Link>
          <Link href='/'>
            <a>
              <Image height={22} width={22} src='/images/fb.svg' alt='' />
            </a>
          </Link>
        </div>
      </div>
      <div className={style.categories}>
        <h1 className={style.title}>What are you looking for?</h1>
        <ul className={style.lists}>
          <li className={style.list}>
            <Link href='/'>
              <a>Learning</a>
            </Link>
          </li>
          <li className={style.list}>
            <Link href='/'>
              <a>Specialization courses</a>
            </Link>
          </li>
          <li className={style.list}>
            <Link href='/'>
              <a>Membership Registration</a>
            </Link>
          </li>
          <li className={style.list}>
            <Link href='/'>
              <a>Medical Device Services</a>
            </Link>
          </li>
          <li className={style.list}>
            <Link href='/'>
              <a>Jobs</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Main;
