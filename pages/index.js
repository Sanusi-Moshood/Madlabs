import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import hImg from '../public/himg - Copy.jpg';

// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hcont}>
          <div className={styles.htext}>
            <h1>
              Dive into the world of{' '}
              <span className={styles.tblue}>Overworld </span> and create your
              own <span className={styles.tblue}>destiny</span>
            </h1>
            <span className={styles.htextspan}>
              Enter a world of endless adventure and unleash your inner hero
              with Overworld
            </span>
            <div>
              <button>
                Become Worthy <HiArrowNarrowRight />{' '}
              </button>
            </div>
          </div>
          <div className={styles.himg}>
            <Image src={hImg} className={styles.himgimg} />
          </div>
        </div>
      </section>

      <section className={styles.about}></section>
    </>
  );
}
