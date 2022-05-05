import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import style from '../styles/Navbar.module.scss';
import Toggler from './Toggler';

const Navbar: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((isToggled) => (isToggled = !isToggled));
  };
  return (
    <div className={style.navbar}>
      <Link href='/'>
        <a className={style.logo}>
          <Image
            src={'/images/M2H Logo.svg'}
            height={40}
            width={40}
            // layout='responsive'
            alt=''
          />
        </a>
      </Link>
      <ul className={style.nav}>
        <li className={style.list}>
          <Link href='/'>
            <a className={style.link}>Home</a>
          </Link>
        </li>
        <li className={style.list}>
          <Link href='/categories'>
            <a className={style.link}>Categories</a>
          </Link>
        </li>
        <li className={style.list}>
          <Link href='/'>
            <a className={style.link}>About</a>
          </Link>
        </li>
        <li className={style.list}>
          <Link href='/contact'>
            <a className={style.link}>Contact</a>
          </Link>
        </li>
        <li className={style.icon}>
          <Link href='/'>
            <a className={style.link}>
              <Image height={16} width={16} src='/images/Vector.png' alt='' />
            </a>
          </Link>
        </li>
        <li className={style.icon}>
          <Link href='/'>
            <a className={style.link}>
              <Image
                height={16}
                width={16}
                src='/images/Vector (1).png'
                alt=''
              />
            </a>
          </Link>
        </li>
      </ul>
      <div className={style.toggle}>
        <Toggler />
      </div>
    </div>
  );
};

export default Navbar;
