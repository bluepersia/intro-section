import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';
import imgMenu from '../images/icon-menu.svg';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src={imgLogo} className={styles.logo} />
      <nav className='desktop tablet'>
        <ul className={styles.navlist}>
          <li>
            <a href='#' className={styles.navlink + ' ' + styles.withDrop}>
              Features
            </a>
          </li>
          <li>
            <a href='#' className={styles.navlink + ' ' + styles.withDrop}>
              Company
            </a>
          </li>
          <li>
            <a href='#' className={styles.navlink}>
              Careers
            </a>
          </li>
          <li>
            <a href='#' className={styles.navlink}>
              About
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.loginBtns + ' desktop tablet'}>
        <a href='#' className={styles.loginBtn}>
          Login
        </a>
        <a href='#' className={styles.registerBtn}>
          Register
        </a>
      </div>

      <img src={imgMenu} className='mobile' />
    </header>
  );
}
