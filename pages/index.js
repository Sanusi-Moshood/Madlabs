import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import hImg from '../public/himg - Copy.jpg';
import wImg from '../public/worthy.jpg';
import aImg from '../public/himg2.png';

import { GiShardSword } from 'react-icons/gi';
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
              Dive into the world of
              <span className={styles.tblue}> Overworld </span> and create your
              own <span className={styles.tblue}>destiny</span>
            </h1>
            <span className={styles.htextspan}>
              Enter a world of endless adventure and unleash your inner hero
              with Overworld
            </span>
            <div>
              <button>
                Become Worthy <HiArrowNarrowRight />
              </button>
            </div>
          </div>
          <div className={styles.himg}>
            <Image src={hImg} className={styles.himgimg} />
          </div>
        </div>
      </section>

      <section id={styles.about}>
        <div className={styles.abcont}>
          <div className={styles.aflex}>
            <div className={styles.aic}>
              <Image src={aImg} className={styles.aicimg} />
            </div>
            <div className={styles.atext}>
              <h2 className={styles.ahead}>
                <span>
                  <GiShardSword />
                </span>
                About Overworld
                <span>
                  <GiShardSword className='shard-sword' />
                </span>
              </h2>
              <p className={styles.ap}>
                Overworld is an ambitious 3D multiplayer RPG that offers a wide
                range of experiences, from battling an army of undead to ruling
                your city, to fishing the great seas!
              </p>
              <p className={styles.ap}>
                Our mission is to create a gaming universe that you can fall in
                love with, with deep, engaging gameplay, high-fidelity graphics,
                and a multi-year content roadmap that will keep you coming back
                for more.
              </p>
              <button className={styles.aicbutton}>Are you Worthy?</button>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.worthy}>
        <div className={styles.container}>
          <h2 className={styles.thead}>
            <span>🥇</span>
            Become Worthy 🥇
          </h2>

          <div className={styles.wflex}>
            <div className={styles.wic}>
              <Image src={wImg} className={styles.wimg} />
            </div>
            <div className={styles.wtext}>
              <span className={styles.wsm}>
                Looking to be deemed WORTHY to get your Mint Pass NFT? 🗝️✨ Use
                hashtag #BeWorthy and show us just how WORTHY you are. ❤️ 💬 🔁
              </span>
              <div>
                <h3>🔮Unrivaled Creativity </h3>
                <p>
                  Creativity can come in many shapes and sizes! 🎨🖊️ Lore, art,
                  creations, or original memes... Use your imagination and
                  creativity to share your vision of Overworld! If you use AI,
                  say it :) The WORTHY are honest and authentic!
                </p>
              </div>
              <div>
                <h3>🎉Vibrant Participation </h3>
                <p>
                  There is no Overworld without community! The WORTHY are the
                  ones who show up and make their presence known and bring new
                  followers into the community! Comment, retweet, like, and
                  participate consistently! Raid tweets and spread the word!📣
                </p>
              </div>
              <div>
                <h3>💡Profound Wisdom</h3>
                <p>
                  We love great ideas, and we love hearing new ones we have yet
                  to consider.🧠 Share your wisdom and insights in posts and
                  threads to help us grow together.
                </p>
              </div>

              <div>
                <p>
                  We'll be checking back often to give away a massive amount of
                  FREE Mint Pass NFTs in the upcoming weeks.🗝️✨ Now is your
                  time! The stage has been set! The Overworld awaits!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id={styles.team}>
        <div className='tcont'>
          <h2 className={styles.thead}>
            <span>
              <GiShardSword />
            </span>
            {'  '}
            Team {'  '}
            <span>
              <GiShardSword className='shard-sword' />
            </span>
          </h2>
        </div>
      </section> */}
    </>
  );
}
