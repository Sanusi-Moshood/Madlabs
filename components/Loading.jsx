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
      tl.to('#video-background', {
        height: 0,
        duration: 0.5,
        delay: 17.5,
      });
    });

    tl.to('#video-background', {
      height: 0,
      duration: 0.5,
      delay: 17.5,
    });
  }, []);

  return (
    <div>
      <video autoPlay muted loop id='video-background'>
        <source src='/lo.mp4' type='video/mp4' />
      </video>
    </div>
  );
};

export default Loading;
