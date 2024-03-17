import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';
import imgMenu from '../images/icon-menu.svg';
import imgTodo from '../images/icon-todo.svg';
import imgCalendar from '../images/icon-calendar.svg';
import imgReminders from '../images/icon-reminders.svg';
import imgPlanning from '../images/icon-planning.svg';
import { useEffect, useState } from 'react';

export default function Header(): JSX.Element {
  const [featuresOpen, setFeaturesOpen] = useState<boolean>(false);
  const [companyOpen, setCompanyOpen] = useState<boolean>(false);

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

  return (
    <header className={styles.header}>
      <img src={imgLogo} className={styles.logo} />
      <nav className={styles.nav + ' desktop tablet'}>
        <ul className={styles.navlist}>
          <li>
            <a
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setFeaturesOpen((val) => !val);
              }}
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
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setCompanyOpen((val) => !val);
              }}
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

      <div className={styles.btnsLogin + ' desktop tablet'}>
        <a href='#' className={styles.btnLogin}>
          Login
        </a>
        <a href='#' className={styles.btnRegister}>
          Register
        </a>
      </div>

      <img src={imgMenu} className='mobile' />

      <ul
        className={[
          styles.dropdown,
          styles.dropdownFeatures,
          featuresOpen ? styles.open : '',
        ].join(' ')}
      >
        <li>
          <img src={imgTodo} /> Todo List
        </li>
        <li>
          <img src={imgCalendar} /> Calendar
        </li>
        <li>
          <img src={imgReminders} /> Reminders
        </li>
        <li>
          <img src={imgPlanning} /> Planning
        </li>
      </ul>

      <ul
        className={[
          styles.dropdown,
          styles.dropdownCompany,
          companyOpen ? styles.open : '',
        ].join(' ')}
      >
        <li>History</li>
        <li>Our Team</li>
        <li>Blog</li>
      </ul>
    </header>
  );
}
