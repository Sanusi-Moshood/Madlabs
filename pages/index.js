import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js';
import Link from 'next/link';
import { HiArrowNarrowRight } from 'react-icons/hi';
import hImg from '../public/m2.png';
import wImg from '../public/m4.png';
import iwImg from '../public/m3.png';
import aImg from '../public/m5.png';
import rImg from '../public/m6.png';
import mImg from '../public/b1.png';
import dImg from '../public/m8.png';
import hhImg from '../public/m7.png';
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
              Join the <span className={styles.tblue}> Mad Lads </span>
              revolution the first ever xNFT collection launched via
              <span className={styles.tblue}> Backpack </span>
            </h1>
            <span className={styles.htextspan}>
              Mad Lads dares to be different, with an edgy attitude and a
              limited supply of unique xNFTs
            </span>
            <div>
              <button
                onClick={(e) => {
                  handleScroll(e, '#worthy');
                }}
              >
                FOCK IT, Mint Now!
              </button>
            </div>
          </div>
          <div className={styles.himg}>
            <Image src={hhImg} className={styles.himgimg} priority />
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
              <h2 className={styles.ahead}>About MadLads</h2>
              <p className={styles.ap}>
                Welcome to Mad Lads, the first-ever xNFT collection launched via
                Backpack. At Mad Lads, we're all about pushing the boundaries of
                what's possible with blockchain technology. Our limited-edition
                xNFTs are designed to be unique, edgy, and rebellious – just
                like the community of blockchain enthusiasts we serve.
              </p>
              <p className={styles.ap}>
                Our mission is to make it easy for anyone to own and trade their
                favorite xNFTs, without the complexity and confusion that often
                comes with multi-chain wallets. That's why we're thrilled to be
                partnering with Backpack, the innovative cross-chain wallet that
                makes it simple to access all your xNFTs in one place.
              </p>
              <button className={styles.aicbutton}>How Mad are you?</button>
            </div>
          </div>
        </div>
      </section>
      <section id={'worthy'}>
        <div className={styles.container}>
          <h2 className={styles.thead}>How Mad Are You? 😡</h2>
          <p className={styles.wsm}>
            Are you ready to get MAD and get a madlist? Here are some tips on
            how to show the Mad Lads community just how MAD you can be
          </p>
          <div className={styles.wflex}>
            <div className={styles.wic}>
              <Image src={wImg} className={styles.wimg} />
            </div>

            <div className={styles.wtext}>
              <div className={styles.wsub}>
                <div className={styles.wsubt}>
                  <h3>
                    <span> Think outside the box 🤔</span>
                  </h3>
                  <p>
                    We love originality and creativity, so don't be afraid to
                    push the limits and come up with something truly unique.
                    Whether it's a meme video, a tutorial, a blog post, or even
                    a song, the madder the better!
                  </p>
                </div>
                <div className={styles.wsubt}>
                  <h3>
                    <span> Share your content on Twitter 🐦</span>
                  </h3>
                  <p>
                    To be eligible for madlist, your content should be
                    high-quality and relevant to Backpack or Mad Lads. We want
                    to see your creativity and enthusiasm for our project shine
                    through!
                  </p>
                </div>
                <div className={styles.wsubt}>
                  <h3>
                    <span>Keep it Backpack or Mad Lads related 🎒 </span>
                  </h3>
                  <p>
                    To be eligible for madlist, your content should be
                    high-quality and relevant to Backpack or Mad Lads. We want
                    to see your creativity and enthusiasm for our project shine
                    through!
                  </p>
                </div>
                <div className={styles.wsubt}>
                  <h3>
                    <span>Show us what you've got and join the MADNESS!</span>
                  </h3>
                  <p>
                    📌 To participate, tag or reply to our accounts on Twitter
                    and post the link to your tweet in 🏟️ | #content-arena on
                    our Discord server. Remember, the madder the better! 😜
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
            To be part of the MadLadsNFT community you need to be worthy to
            receive the KEY MINT PASS, you can get this mint pass by supporting
            the MadLadsNFT community
          </p>
          <div className={styles.mflex}>
            <div className={styles.msub}>
              <div className={styles.msubt}>
                <div>
                  <h3>
                    <span> Supply: 10,000</span>
                  </h3>
                </div>
              </div>
              <div className={styles.msubt}>
                <div>
                  <h3>
                    📅 <span>MInt Date: 4/20</span>
                  </h3>
                </div>
              </div>
              <div className={styles.msubt}>
                <div>
                  <h3>
                    💰 <span>Mint Price: 6.9 sol</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.wic}>
              <Image src={mImg} className={styles.wimg} />
            </div>
          </div>
        </div>
      </section>
      {/* <section className={styles.rmap} id='roadmap'>
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
      </section> */}

      <section>
        <div className={styles.container}>
          <h2 className={styles.thead}>Latest drops 🔥</h2>

          <div className={styles.tflex}>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m4.png'} fill />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m7.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m5.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m6.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m8.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m3.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m10.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
            <div className={styles.tcont}>
              <div className={styles.timg}>
                <Image src={'/m9.png'} fill objectFit='contain' />
              </div>
              <div className={styles.ttext}>
                <h3>#MadLads</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id={'faq'}>
        <div className={styles.abcont}>
          <div className={styles.aflex}>
            <div className={styles.ftext}>
              <h2 className={styles.ahead}>FAQ</h2>
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
      {/* 
      <section id={'worthy'}>
        <div className={styles.container}>
          <h2 className={styles.thead}>
            <span>🥇</span>I am Worthy 🥇
          </h2>
          <p className={styles.wsm}>
            This is all I’ve done so far since before #BeWorthy till now 🥹 and I
            still have more coming 💯🚀🚀🚀❤️‍🩹
          </p>
          <div className={styles.wflex}>
            <div className={styles.wic}>
              <Image src={iwImg} className={styles.wimg} />
            </div>

            <div className={styles.wtext}>
              <div className={styles.wsub}>
                <div className={styles.wsubt}>
                  <h3>A Collection of Memes I made for MadLads 😂</h3>
                  <p>
                    <Link
                      href={
                        'https://twitter.com/yfn_doc/status/1634608658821664772?s=46&t=F4XOV4QI0XDFuhqDHAa_8Q'
                      }
                      target='_blank'
                    >
                      <FaTwitter /> View thread
                    </Link>
                  </p>
                </div>

                <div className={styles.wsubt}>
                  <h3>
                    A thread of feature i look forward to seeing in MadLads 🎮
                  </h3>
                  <p>
                    <Link
                      href={
                        'https://twitter.com/yfn_doc/status/1634006862931677186?s=46&t=F4XOV4QI0XDFuhqDHAa_8Q'
                      }
                      target='_blank'
                    >
                      <FaTwitter /> View thread
                    </Link>
                  </p>
                </div>
                <div className={styles.wsubt}>
                  <h3>I used MadLads frame as my pfp🖼</h3>
                  <p>
                    <Link
                      href={
                        'https://twitter.com/yfn_doc/status/1633632142990139392?s=46&t=F4XOV4QI0XDFuhqDHAa_8Q'
                      }
                      target='_blank'
                    >
                      <FaTwitter /> View tweet
                    </Link>
                  </p>
                </div>
                <div className={styles.wsubt}>
                  <h3>I made more memes for MadLads 😂</h3>
                  <p>
                    {' '}
                    <Link
                      href={
                        'https://twitter.com/yfn_doc/status/1635753058771652612?s=46&t=F4XOV4QI0XDFuhqDHAa_8Q'
                      }
                      target='_blank'
                    >
                      <FaTwitter /> View thread
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
