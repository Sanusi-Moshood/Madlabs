import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import SiOpensea from 'react-icons';
import { AiOutlineTwitter } from 'react-icons/ai';

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [open, setOpen] = useState(false);

  const navToggle = (event) => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src={'/logb.svg'} id={'intlog'} fill />
        </div>
        <div className={styles.nvrc}>
          <div
            className={`${styles.navlinks}  ${
              open ? styles.menuopen : 'menuclosed'
            }`}
          >
            <Link
              onClick={navToggle}
              href={'/'}
              className={`${styles.link} ${
                pathname === '/' ? styles.active : ''
              }`}
            >
              {' '}
              Home
            </Link>
            <Link
              onClick={navToggle}
              href={'/about'}
              className={`${styles.link} ${
                pathname === '/about' ? styles.active : ''
              }`}
            >
              {' '}
              About
            </Link>
            <Link
              onClick={navToggle}
              href={'/service'}
              className={`${styles.link} ${
                pathname === '/service' ? styles.active : ''
              }`}
            >
              Team
            </Link>
            <Link
              onClick={navToggle}
              href={'/service'}
              className={`${styles.link} ${
                pathname === '/service' ? styles.active : ''
              }`}
            >
              Roadmap
            </Link>
            <Link
              onClick={navToggle}
              href={'/gallery'}
              className={`${styles.link} ${
                pathname === '/gallery' ? styles.active : ''
              }`}
            >
              Mint info
            </Link>
          </div>
          <div className={styles.nico}>
            <FaDiscord className={styles.ico} />
            <FaTwitter className={styles.ico} />
            <button>Connect wallet</button>
          </div>
          <div
            className={`${styles.menu} ${open ? styles.menuactive : ''}`}
            onClick={navToggle}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>
    </div>
  );
}
