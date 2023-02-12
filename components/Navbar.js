import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../styles/Nav.module.css';

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
          <div className={styles.xy}>
            <h2>
              <span className={styles.x}>X</span>
              <span className={`x ${styles.x}`}>Y</span>
            </h2>
          </div>
        </div>
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
            href={'/service'}
            className={`${styles.link} ${
              pathname === '/service' ? styles.active : ''
            }`}
          >
            Services
          </Link>
          <Link
            onClick={navToggle}
            href={'/gallery'}
            className={`${styles.link} ${
              pathname === '/gallery' ? styles.active : ''
            }`}
          >
            Gallery
          </Link>
        </div>
        <div
          className={`${styles.menu} ${open ? styles.menuactive : ''}`}
          onClick={navToggle}
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </nav>
    </div>
  );
}
