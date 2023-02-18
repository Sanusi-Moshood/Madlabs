import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Link from 'next/link';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineDribbble,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add('(min-width: 700px', () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#trigger',
          start: '10% top',
          end: 'center top',
          pin: true,
          scrub: 1,
          // markers: true,
        },
      });
      tl.to('#box', {
        height: 0,
        // ease: 'expo.inOut',
      });
    });
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.img}>
          <Image
            src={'/xy 2.1.jpg'}
            fill
            objectFit='cover'
            // objectPosition='bottom'
          />
        </div>
      </section>
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.quote}>
            <div>
              <p>Capturing Moments that tell stories.</p>
            </div>
          </div>

          <div className={styles.parent} id='trigger'>
            <div className={styles.div1}>
              <div id='box'>
                <Image src={'/m10 done.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.abs}>
                <Image src={'/1ST.jpg'} fill objectFit='cover' />
              </div>
            </div>
            <div className={styles.div2}>
              <div id='box'>
                <Image src={'/papee 2done.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.abs}>
                <Image src={'/1ST.jpg'} fill objectFit='cover' />
              </div>
            </div>
            <div className={styles.div3}>
              <div id='box'>
                <Image
                  src={'/papee and ghost 2.1.jpg'}
                  fill
                  objectFit='cover'
                />
              </div>
              <div className={styles.abs}>
                <Image src={'/1ST.jpg'} fill objectFit='cover' />
              </div>
            </div>
            <div className={styles.div4}>
              <div id='box'>
                <Image src={'/ayomi 2 done.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.abs}>
                <Image src={'/1ST.jpg'} fill objectFit='cover' />
              </div>
            </div>
            <div className={styles.div5}>
              <div id='box'>
                <Image src={'/papee 5 done.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.abs}>
                <Image src={'/1ST.jpg'} fill objectFit='cover' />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.container2}>
        <section className={styles.section2}>
          <div className={styles.quote}>
            <p>Capturing emotions and personality through creative lens work</p>
          </div>
          <br />
          <br />
          <div className={styles.scont}>
            <div className={styles.service}>
              <div className={styles.simg}>
                <Image src={'/DSC_0523.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.simg2}>
                <Image src={'/m6 done.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.simg3}>
                <Image src={'/m4 done.jpg'} fill objectFit='cover' />
              </div>
            </div>
            <br />
            <br />
            <div className={styles.service}>
              <div className={styles.simg4}>
                <Image src={'/ayomi 10 done.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.simg6}>
                <Image src={'/ayomi 9 done.jpg'} fill objectFit='cover' />
              </div>
              <div className={styles.simg5}>
                <Image src={'/ayomi 8 done.jpg'} fill objectFit='cover' />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className={styles.contact}>
          <div className={styles.text}>
            <h3>
              Let's work together to capture lots of unforgettable moments 📷
            </h3>
          </div>
          <div className={styles.links}>
            <Link href={'#'} className={styles.link}>
              <AiOutlineWhatsApp className={styles.icn} /> Whatsapp
            </Link>
            <Link href={'#'} className={styles.link}>
              <AiOutlineInstagram className={styles.icn} /> Instagram
            </Link>
            <Link href={'#'} className={styles.link}>
              <AiOutlineTwitter className={styles.icn} /> Twitter
            </Link>
            <Link href={'#'} className={styles.link}>
              <AiOutlineDribbble className={styles.icn} /> Dribble
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
