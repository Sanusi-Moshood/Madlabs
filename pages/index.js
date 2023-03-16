import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import hImg from '../public/himggg.png';
import wImg from '../public/worthy.png';
import aImg from '../public/himg2.png';
import rImg from '../public/rmap.png';
import mImg from '../public/mint.png';
import dImg from '../public/disc.png';
import hhImg from '../public/Group 42992.png';
import faqData from '../components/faqData';
import FaqItem from '../components/FaqItem';
import { GiShardSword } from 'react-icons/gi';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='bg-overlay'>
        <div className='oc1'></div>
        <div className='oc2'></div>
      </div>
      <section className={styles.hero} id='hero'>
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
              <button
                onClick={(e) => {
                  handleScroll(e, '#worthy');
                }}
              >
                Become Worthy <HiArrowNarrowRight />
              </button>
            </div>
          </div>
          <div className={styles.himg}>
            <Image src={hhImg} className={styles.himgimg} />
          </div>
        </div>
      </section>

      <section id={'about'}>
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
      <section id={'worthy'}>
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
      <section id={'mint'}>
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
            <div className={styles.msub}>
              <div className={styles.msubt}>
                <div>
                  <h3>
                    <span> Supply</span>
                  </h3>
                  <p>To be announced📣</p>
                </div>
              </div>
              <div className={styles.msubt}>
                <div>
                  <h3>
                    📅 <span>MInt Date</span>
                  </h3>
                  <p>To be announced📣</p>
                </div>
              </div>
              <div className={styles.msubt}>
                <div>
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
      <section className={styles.rmap} id='roadmap'>
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
          <div className={styles.rflex}>
            <div className={styles.ric}>
              <Image src={dImg} className={styles.aicimg} />
            </div>
            <div className={styles.border2}></div>
            <div className={styles.atext}>
              <h6> Discord Coming Soon 🎉💬 #2</h6>
              <p className={styles.ap}>
                A stacked slate for the WORTHY. INCARNA Holders will be able to
                obtain multiple airdrops on top of the incredible benefits
                offered! Follow us to learn more!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.container}>
          <h2 className={styles.thead}>Latest drops 🔥</h2>

          <div className={styles.tflex}>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/three.png'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>#Overworld</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/himg2.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#Overworld</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/key.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#Overworld</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/himgg.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#Overworld</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={'team'}>
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
                  <Link
                    href={'https://twitter.com/HeyJeremyHorn'}
                    about='blank'
                  >
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/NptP1My9sI'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/004.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>John Haris</h3>
                <h5>Vp of Tech</h5>
                <div className={styles.ticn}>
                  <Link href={'#'}>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/iP0XoB5LAc'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/002.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>James Hall</h3>
                <h5>Creative Director</h5>
                <div className={styles.ticn}>
                  <Link href={'https://twitter.com/The_Arkrael'} about='blank'>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/iMpYz0h5OF'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/005.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Tom Tang</h3>
                <h5>Director Of design</h5>
                <div className={styles.ticn}>
                  <Link href={'#'}>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/KiJDMQGZ2k'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/006.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Stojan Madjunkov</h3>
                <h5>Director of Product</h5>
                <div className={styles.ticn}>
                  <Link href={'#'}>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/D1BzujdvxV'}>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/007.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Yitao Guan</h3>
                <h5>Advisor</h5>
                <div className={styles.ticn}>
                  <Link href={'#'}>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/TxL1SPFLAi'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/008.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Brian Wilson</h3>
                <h5>Associate Art Director</h5>
                <div className={styles.ticn}>
                  <Link href={'#'}>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/5HSM3DjDQC'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/009.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Anthony Ulrich</h3>
                <h5>Lead Gameplay Engineer</h5>
                <div className={styles.ticn}>
                  <Link href={'#'}>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/W5oCVh5Vh0'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/010.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Micheal Maurino</h3>
                <h5>Lead Concept Artist</h5>
                <div className={styles.ticn}>
                  <Link href={'#'}>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/SujoAHh0pt'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/003.jpeg'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>Darren Lue</h3>
                <h5>Community Manager</h5>
                <div className={styles.ticn}>
                  <Link href={'https://twitter.com/blind_gg'} about='blank'>
                    <FaTwitter />
                  </Link>
                  <Link href={'https://t.co/46NFU3RtaA'} about='blank'>
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <div className={styles.pflex}>
          <Image width={'300'} height='60' src={'/Group 42991.svg'} />
          <Image width={'58'} height='60' src={'/Vector.svg'} />
          <Image width={'103'} height='60' src={'/Vector-1.svg'} />
        </div>
      </div>

      <section id={'faq'}>
        <div className={styles.abcont}>
          <div className={styles.aflex}>
            <div className={styles.ftext}>
              <h2 className={styles.ahead}>
                <span>
                  <GiShardSword />
                </span>
                FAQ
                <span>
                  <GiShardSword className='shard-sword' />
                </span>
              </h2>
              <div className={styles.ff}>
                {faqData.map((item) => (
                  <FaqItem
                    key={item.id}
                    id={item.id}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
            <div className={styles.aic}>
              <Image src={hImg} className={styles.aicimg} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.footer}>
          <Image
            src={'/footer.png'}
            fill
            objectFit='cover'
            objectPosition='center'
          />
        </div>
      </section>
    </>
  );
}
