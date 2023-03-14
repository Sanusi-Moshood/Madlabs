import React, { useEffect } from 'react';
import styles from '../styles/Loading.module.css';
import { gsap } from 'gsap';
import Image from 'next/image';
import Head from 'next/head';

const Loading = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add('(max-width: 380px', () => {
      tl.to('#centre', {
        delay: 2.5,
        width: '4rem',
        duration: 1,
      })
        .to(
          '#xy',
          {
            // position: 'absolute',
            opacity: '1',
            bottom: '10px',
            left: '30px',
            duration: 0.5,
          },
          '<1'
        )
        .to('#centre', {
          duration: 1,
          width: '180px',
          height: '280px',
        })
        .to('#img3', {
          height: 0,
          duration: 1.5,
        })
        .to('#img2', {
          height: 0,
          duration: 1.5,
        })
        .to('#centre', {
          height: 0,
          width: 0,
          duration: 1,
        })
        .to('#xy', {
          opacity: '0',
        })
        .to('#coverer', {
          height: 0,
          duration: 0.5,
        });
    });

    tl.to('#centre', {
      delay: 3,
      width: '4rem',
      duration: 1,
    })
      .to(
        '#xy',
        {
          // position: 'absolute',
          opacity: '1',
          bottom: '10px',
          left: '30px',
          duration: 0.5,
        },
        '<1'
      )
      .to('#centre', {
        duration: 1,
        width: '450px',
        height: '600px',
      })
      .to('#img3', {
        height: 0,
        duration: 1.5,
      })
      .to('#img2', {
        height: 0,
        duration: 1.5,
      })
      .to('#centre', {
        height: 0,
        width: 0,
        duration: 1,
      })
      .to('#xy', {
        opacity: '0',
      })
      .to('#coverer', {
        height: 0,
        duration: 0.5,
      });
  }, []);

  return (
    <div className={styles.container} id={'coverer'}>
      <div className={styles.inner}>
        <div className={styles.xy} id={'xy'}>
          <Image src={'/Group.svg'} id={'intlog'} fill />
        </div>
        <div className={styles.centre} id={'centre'}>
          <div className={styles.imgCont}>
            <div className={` ${styles.img1} ${styles.img}`} id={'img1'}>
              <Image src={'/three.jfif'} fill objectFit='cover' />
            </div>
            <div className={`${styles.img2} ${styles.img}`} id={'img2'}>
              <Image src={'/two.jfif'} fill objectFit='cover' />
            </div>
            <div className={`${styles.img3} ${styles.img}`} id={'img3'}>
              <Image src={'/one.jfif'} fill objectFit='cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
