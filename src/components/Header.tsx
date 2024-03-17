import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';
import imgMenu from '../images/icon-menu.svg';
import imgTodo from '../images/icon-todo.svg';
import imgCalendar from '../images/icon-calendar.svg';
import imgReminders from '../images/icon-reminders.svg';
import imgPlanning from '../images/icon-planning.svg';
import imgClose from '../images/icon-close-menu.svg';
import { useEffect, useRef, useState } from 'react';

export default function Header(): JSX.Element {
  const [featuresOpen, setFeaturesOpen] = useState<boolean>(false);
  const [companyOpen, setCompanyOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const featuresRef = useRef<HTMLAnchorElement | null>(null);
  const companyRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  function handleGlobalClick(): void {
    setFeaturesOpen(false);
    setCompanyOpen(false);
  }

  function handleFeaturesClick(e: React.MouseEvent): void {
    e.stopPropagation();
    setFeaturesOpen((val) => !val);
  }

  function handleCompanyClick(e: React.MouseEvent): void {
    e.stopPropagation();
    setCompanyOpen((val) => !val);
  }

  return (
    <header className={styles.header}>
      <img src={imgLogo} className={styles.logo} />
      <nav className={styles.nav + ' desktop'}>
        <ul className={styles.navlist}>
          <li>
            <a
              ref={featuresRef}
              onClick={handleFeaturesClick}
              href='#'
              className={
                styles.navlink +
                ' ' +
                styles.withDrop +
                ' ' +
                (featuresOpen ? styles.open : '')
              }
            >
              Features
            </a>
          </li>
          <li>
            <a
              ref={companyRef}
              onClick={handleCompanyClick}
              href='#'
              className={
                styles.navlink +
                ' ' +
                styles.withDrop +
                ' ' +
                (companyOpen ? styles.open : '')
              }
            >
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

      <div className={styles.btnsLogin + ' desktop'}>
        <a href='#' className={styles.btnLogin}>
          Login
        </a>
        <a href='#' className={styles.btnRegister}>
          Register
        </a>
      </div>

      <img
        src={imgMenu}
        onClick={() => setMenuOpen(true)}
        className={styles.btnMenu + ' mobile tablet'}
      />

      <ul
        className={[
          styles.dropdownBase,
          styles.dropdown,
          styles.dropdownFeatures,
          featuresOpen ? styles.open : '',
          'desktop',
        ].join(' ')}
        style={
          featuresRef.current
            ? { left: `${featuresRef.current.getBoundingClientRect().left}px` }
            : {}
        }
      >
        <li>
          <img src={imgTodo} className={styles.imgFeature} /> Todo List
        </li>
        <li>
          <img src={imgCalendar} className={styles.imgFeature} /> Calendar
        </li>
        <li>
          <img src={imgReminders} className={styles.imgFeature} /> Reminders
        </li>
        <li>
          <img src={imgPlanning} className={styles.imgFeature} /> Planning
        </li>
      </ul>

      <ul
        className={[
          styles.dropdownBase,
          styles.dropdown,
          styles.dropdownCompany,
          companyOpen ? styles.open : '',
          'desktop',
        ].join(' ')}
        style={
          companyRef.current
            ? { left: `${companyRef.current.getBoundingClientRect().left}px` }
            : {}
        }
      >
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>

      <div
        className={
          styles.overlay + ' mobile tablet ' + (menuOpen ? styles.open : '')
        }
      >
        <div className={styles.menuMobile}>
          <img
            src={imgClose}
            className={styles.btnClose}
            onClick={() => setMenuOpen(false)}
          />
          <a
            onClick={handleFeaturesClick}
            className={
              styles.navlink +
              ' ' +
              styles.withDrop +
              ' ' +
              (featuresOpen ? styles.open : '')
            }
          >
            Features
          </a>
          <ul
            className={
              styles.dropdownBase +
              ' ' +
              styles.dropdownMobile +
              ' ' +
              (featuresOpen ? styles.open : '')
            }
          >
            <li>
              <img src={imgTodo} className={styles.imgFeature} /> Todo List
            </li>
            <li>
              <img src={imgCalendar} className={styles.imgFeature} /> Calendar
            </li>
            <li>
              <img src={imgReminders} className={styles.imgFeature} /> Reminders
            </li>
            <li>
              <img src={imgPlanning} className={styles.imgFeature} /> Planning
            </li>
          </ul>
          <a
            onClick={handleCompanyClick}
            className={
              styles.navlink +
              ' ' +
              styles.withDrop +
              ' ' +
              (companyOpen ? styles.open : '')
            }
          >
            Company
          </a>
          <ul
            className={
              styles.dropdownBase +
              ' ' +
              styles.dropdownMobile +
              ' ' +
              (companyOpen ? styles.open : '')
            }
          >
            <li>History</li>
            <li>Our Team</li>
            <li>Blog</li>
          </ul>
          <a className={styles.navlink}>Careers</a>
          <a className={styles.navlink}>About</a>
          <div className={styles.btnsLoginMobile}>
            <a className={styles.btnLogin}>Login</a>
            <a className={styles.btnRegister}>Register</a>
          </div>
        </div>
      </div>
    </header>
  );
}
