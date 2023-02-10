import React, { useEffect } from 'react';
import styles from '../styles/Loading.module.css';
import { gsap } from 'gsap';

const Loading = () => {
  useEffect(() => {
    var tl = gsap.timeline();
    let mm = gsap.matchMedia();

    mm.add('(max-width: 380px', () => {
      tl.to('#centre', {
        delay: 1,
        width: '4rem',
        duration: 1,
        ease: 'expo.inOut',
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
          ease: 'expo.inOut',
        })
        .to('#img2', {
          height: 0,
          duration: 1.5,
          ease: 'expo.inOut',
        })
        .to('#centre', {
          height: 0,
          // width: 0,
          duration: 1.5,
          ease: 'expo.inOut',
        })
        .to('#xy', {
          opacity: '0',
        })
        .to('#container', {
          height: 0,
          duration: 1.5,
          ease: 'expo.inOut',
        });
    });

    tl.to('#centre', {
      delay: 1,
      width: '4rem',
      duration: 1,
      ease: 'expo.inOut',
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
        width: '300px',
        height: '400px',
      })
      .to('#img3', {
        height: 0,
        duration: 1.5,
        ease: 'expo.inOut',
      })
      .to('#img2', {
        height: 0,
        duration: 1.5,
        ease: 'expo.inOut',
      })
      .to('#centre', {
        height: 0,
        width: 0,
        duration: 1.5,
        ease: 'expo.inOut',
      })
      .to('#xy', {
        opacity: '0',
      })
      .to('#container', {
        height: 0,
        duration: 1.5,
        ease: 'expo.inOut',
      });
  }, []);

  return (
    <div className={styles.container} id={'container'}>
      <div className={styles.inner}>
        <div className={styles.xy} id={'xy'}>
          <h1>
            <span className={styles.x}>X</span>
            <span className={`x ${styles.x}`}>Y</span>
          </h1>
          <h1></h1>
        </div>
        <div className={styles.centre} id={'centre'}>
          <div className={styles.imgCont}>
            <div className={` ${styles.img1} ${styles.img}`} id={'img1'}></div>
            <div className={`${styles.img2} ${styles.img}`} id={'img2'}></div>
            <div className={`${styles.img3} ${styles.img}`} id={'img3'}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
