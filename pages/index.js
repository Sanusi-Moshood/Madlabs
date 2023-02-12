import styles from '../styles/Home.module.css';
import Image from 'next/image';
export default function Home() {
  return (
    <div className={styles.container}>
      <section>
        <div className={styles.herotext}>
          <h1>AZEEZ ADESINA</h1>
        </div>
        <div className={styles.heroimg}>
          <div className={styles.img}></div>
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
}
