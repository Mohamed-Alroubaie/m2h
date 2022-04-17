import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import style from '../styles/Toggle.module.scss';

const Toggler: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((isToggled) => (isToggled = !isToggled));
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [toggle]);

  return (
    <div onClick={handleToggle} className={!toggle ? style.ton : style.toff}>
      <div className={style.image}>
        <p>
          <Link href='/'>
            <a>
              <Image
                src={'/images/M2H Logo.svg'}
                width={50}
                height={50}
                alt='Navbar Logo'
              />
            </a>
          </Link>
        </p>
        <div className={style.toggle}>
          <div></div>
        </div>
      </div>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/categories'>
            <a>Catagories</a>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Toggler;
