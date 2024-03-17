import styles from './Main.module.css';
import imgHeroMobile from '../images/image-hero-mobile.png';
import imgHeroDesktop from '../images/image-hero-desktop.png';
import imgDatabiz from '../images/client-databiz.svg';
import imgAudophile from '../images/client-audiophile.svg';
import imgMeet from '../images/client-meet.svg';
import imgMaker from '../images/client-maker.svg';

export default function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <img src={imgHeroMobile} className={styles.imgMobile + ' mobile'} />
      <div className={styles.content}>
        <h1 className={styles.title}>Make remote work</h1>
        <p className={styles.body}>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className={styles.btn}>Learn more</button>

        <div className={styles.clients}>
          <img src={imgDatabiz} className={styles.client} />
          <img src={imgAudophile} className={styles.client} />
          <img src={imgMeet} className={styles.client} />
          <img src={imgMaker} className={styles.client} />
        </div>
      </div>
      <img
        src={imgHeroDesktop}
        className={styles.imgDesktop + ' tablet desktop'}
      />
    </main>
  );
}
