import styles from '../styles/About.module.css';
import Image from 'next/image';
const about = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.herotext}>
          <h1>
            <span className={styles.b1}>A</span>
            <span className={styles.b2}>Z</span>
            <span className={styles.b3}>E</span>
            <span className={styles.b4}>E</span>
            <span className={styles.b5}>Z</span>
            <span className={styles.b6}> </span>
            <span className={styles.b7}>A</span>
            <span className={styles.b8}>D</span>
            <span className={styles.b9}>E</span>
            <span className={styles.b10}>S</span>
            <span className={styles.b11}>I</span>
            <span className={styles.b12}>N</span>
            <span className={styles.b13}>A</span>
          </h1>
        </div>
        <div className={styles.heroimg}>
          <div className={styles.img}>
            <Image src={'/xy 2.1.jpg'} fill objectFit='cover' />
          </div>
          {/* <Image width={500} height={500} src={'/xy 2.1.jpg'} /> */}
          <p className={styles.p}>
            Portrait photographer 📷 based in Ibadan, Nigeria.
          </p>
          {/* <div className={styles.info}>
        <p className={styles.smalltext}>
          Capturing emotions and personality through creative lens work.
          Sharing moments one frame at a time
        </p>
      </div> */}
        </div>
      </section>
    </div>
  );
};

export default about;
