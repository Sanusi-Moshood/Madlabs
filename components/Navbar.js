import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../styles/Nav.module.css';
import Image from 'next/image';
import { FaDiscord, FaTwitter, FaWallet } from 'react-icons/fa';
import SiOpensea from 'react-icons';
import { AiOutlineTwitter } from 'react-icons/ai';

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [open, setOpen] = useState(false);

  const navToggle = (event) => {
    setOpen((prev) => !prev);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    navToggle();
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container} id='nav'>
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
              onClick={(e) => {
                handleScroll(e, '#hero');
              }}
              href={'#'}
              className={`${styles.link} ${
                pathname === '/' ? styles.active : ''
              }`}
            >
              Home
            </Link>
            <Link
              onClick={(e) => {
                handleScroll(e, '#about');
              }}
              href={'#about'}
              className={`${styles.link} ${
                pathname === '/about' ? styles.active : ''
              }`}
            >
              About
            </Link>
            <Link
              onClick={(e) => {
                handleScroll(e, '#mint');
              }}
              href={'#mint'}
              className={`${styles.link} ${
                pathname === '/gallery' ? styles.active : ''
              }`}
            >
              Mint info
            </Link>
            <Link
              onClick={(e) => {
                handleScroll(e, '#roadmap');
              }}
              href={'#roadmap'}
              className={`${styles.link} ${
                pathname === '/service' ? styles.active : ''
              }`}
            >
              Roadmap
            </Link>
            <Link
              onClick={(e) => {
                handleScroll(e, '#team');
              }}
              href={'#team'}
              className={`${styles.link} ${
                pathname === '/service' ? styles.active : ''
              }`}
            >
              Team
            </Link>
          </div>
          <div className={styles.nico}>
            <Link href={'https://twitter.com/OverworldPlay'} target='blank'>
              <FaTwitter className={styles.ico} />
            </Link>

            <button>Connect wallet</button>
            <FaWallet className={`${styles.ico} ${styles.cnw}`} />
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
