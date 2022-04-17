import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import s from '../styles/Footer.module.scss';

const Footer: NextPage = () => {
  return (
    <div className={s.footer}>
      <ul>
        <li>
          <h1>Content</h1>
          <p>
            <Link href='/'>
              <a>New Resources</a>
            </Link>
          </p>
          <p>
            <Link href='/'>
              <a>The most Popular Content</a>
            </Link>
          </p>
          <p>
            <Link href='/'>
              <a>Search Trend</a>
            </Link>
          </p>
        </li>
        <li>
          <h1>INFORMATION</h1>
          <p>
            <Link href='/'>
              <a>Jobs</a>
            </Link>
          </p>
          <p>
            <Link href='/'>
              <a>Sell your device</a>
            </Link>
          </p>
          <p>
            <Link href='/'>
              <a>Plans & pricing</a>
            </Link>
          </p>
          <p>
            <Link href='/'>
              <a>About us</a>
            </Link>
          </p>
        </li>
        <li>
          <h1>Help</h1>
          <p>
            <Link href='/'>
              <a>Support</a>
            </Link>
          </p>
          <p>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </p>
        </li>
        <li>
          <h1>Social Media</h1>
          <div className={s.icons}>
            <p>
              <Link href='/'>
                <a>
                  <Image
                    src={'/images/bi_instagram.svg'}
                    width={28}
                    height={26}
                    alt=''
                  />
                </a>
              </Link>
            </p>
            <p>
              <Link href='/'>
                <a>
                  <Image src={'/images/f.svg'} width={17} height={27} alt='' />
                </a>
              </Link>
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
