import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import hImg from '../public/three.jpg';
import wImg from '../public/worthy.jpg';
import aImg from '../public/himg2.png';
import rImg from '../public/rmap.jpg';
import mImg from '../public/mint.jpg';

import { GiShardSword } from 'react-icons/gi';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
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
          <p className={styles.wsm}>
            Looking to be deemed WORTHY to get your Mint Pass NFT? 🗝️✨ Use
            hashtag #BeWorthy and show us just how WORTHY you are. ❤️ 💬 🔁
          </p>
          <div className={styles.wflex}>
            <div className={styles.wic}>
              <Image src={wImg} className={styles.wimg} />
            </div>

            <div className={styles.wtext}>
              <div className={styles.wsub}>
                <div className={styles.wsubt}>
                  <h3>
                    🔮 <span>Unrivaled Creativity</span>
                  </h3>
                  <p>
                    Creativity can come in many shapes and sizes! 🎨🖊️ Lore,
                    art, creations, or original memes... Use your imagination
                    and creativity to share your vision of Overworld! If you use
                    AI, say it :) The WORTHY are honest and authentic!
                  </p>
                </div>
                <div className={styles.wsubt}>
                  <h3>
                    🎉 <span>Vibrant Participation</span>
                  </h3>
                  <p>
                    There is no Overworld without community! The WORTHY are the
                    ones who show up and make their presence known and bring new
                    followers into the community! Comment, retweet, like, and
                    participate consistently! Raid tweets and spread the word!📣
                  </p>
                </div>
                <div className={styles.wsubt}>
                  <h3>
                    💡 <span>Profound Wisdom</span>
                  </h3>
                  <p>
                    We love great ideas, and we love hearing new ones we have
                    yet to consider.🧠 Share your wisdom and insights in posts
                    and threads to help us grow together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.worthy}>
        <div className={styles.container}>
          <h2 className={styles.thead}>
            <span></span>
            Mint Info
          </h2>
          <p className={styles.wsm}>
            To be part of the Overworldplay community you need to be worthy to
            receive the KEY MINT PASS, you can get this mint pass by supporting
            the Overworldplay community
          </p>
          <div className={styles.mflex}>
            <div className={styles.mtext}>
              <div className={styles.wsub}>
                <div className={styles.wsubt}>
                  <h3>
                    <span> Supply</span>
                  </h3>
                  <p>To be announced📣</p>
                </div>
                <div className={styles.wsubt}>
                  <h3>
                    📅 <span>MInt Date</span>
                  </h3>
                  <p>To be announced📣</p>
                </div>
                <div className={styles.wsubt}>
                  <h3>
                    💰 <span>Mint Price</span>
                  </h3>
                  <p>To be announced📣</p>
                </div>
              </div>
            </div>
            <div className={styles.wic}>
              <Image src={mImg} className={styles.wimg} />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.rmap}>
        <h2 className={styles.thead}>
          <span>
            <GiShardSword />
          </span>
          {'  '}
          Roadmap {'  '}
          <span>
            <GiShardSword className='shard-sword' />
          </span>
        </h2>
        <div className={styles.abcont}>
          <div className={styles.rflex}>
            <div className={styles.aic}>
              <Image src={rImg} className={styles.aicimg} />
            </div>
            <div className={styles.border}></div>
            <div className={styles.atext}>
              <h6> ✨👤🗝️ ROADMAP REVEAL #1</h6>
              <p className={styles.ap}>
                A stacked slate for the WORTHY. INCARNA Holders will be able to
                obtain multiple airdrops on top of the incredible benefits
                offered! Follow us to learn more!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.team}>
        <div className={styles.container}>
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

          <div className={styles.tflex}>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/001.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/002.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/003.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/004.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/005.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/006.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/007.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/008.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/009.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/010.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Jeremy Horn</h3>
                <h5>Founder</h5>
                <div className={styles.ticn}>
                  <FaTwitter />
                  <FaLinkedin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
